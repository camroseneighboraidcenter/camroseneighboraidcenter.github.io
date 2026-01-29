#!/usr/bin/env node
/* eslint-env node */

/**
 * Batched Test Runner
 * Runs tests in smaller batches to prevent crashes and cleans up artifacts.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const testBatches = [
  {
    name: 'Accessibility - Core Pages',
    command: 'npx playwright test tests/accessibility.spec.ts --project=chromium-light --project=chromium-dark --grep="Home|About|Contact|Donate|Programs"'
  },
  {
    name: 'Accessibility - Program Pages',
    command: 'npx playwright test tests/accessibility.spec.ts --project=chromium-light --project=chromium-dark --grep="Food Bank|Food for Kids|Martha|Medical|Emergency|Referral"'
  },
  {
    name: 'Accessibility - 404 Page',
    command: 'npx playwright test tests/accessibility.spec.ts --project=chromium-light --project=chromium-dark --grep="404"'
  },
  {
    name: 'SEO Tests',
    command: 'npx playwright test tests/seo.spec.ts --project=chromium-light'
  },
  {
    name: 'Performance Tests',
    command: 'npx playwright test tests/performance.spec.ts --project=chromium-light'
  },
  {
    name: 'Visual Tests - Light Mode',
    command: 'npx playwright test tests/visual.spec.ts --project=chromium-light'
  },
  {
    name: 'Visual Tests - Dark Mode',
    command: 'npx playwright test tests/visual.spec.ts --project=chromium-dark'
  },
  {
    name: 'Mobile Tests',
    command: 'npx playwright test tests/accessibility.spec.ts --project=mobile-chrome --project=mobile-safari --grep="Home|About|Contact"'
  },
  {
    name: 'Cross-browser Tests',
    command: 'npx playwright test tests/accessibility.spec.ts --project=firefox --project=webkit --grep="Home|About|Contact"'
  },
  {
    name: 'Lighthouse CI',
    command: 'npx lhci autorun'
  }
];

function cleanup() {
  console.log('\n🧹 Cleaning up test artifacts...');

  const dirsToClean = [
    'test-results',
    'playwright-report',
    '.lhci'
  ];

  dirsToClean.forEach(dir => {
    const dirPath = path.join(process.cwd(), dir);
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✓ Cleaned ${dir}`);
    }
  });

  // Clean up lighthouse JSON files
  const files = fs.readdirSync(process.cwd());
  files.forEach(file => {
    if (file.startsWith('lighthouse-') && file.endsWith('.json')) {
      fs.unlinkSync(path.join(process.cwd(), file));
      console.log(`✓ Cleaned ${file}`);
    }
  });
}

function runBatch(batch) {
  console.log(`\n🧪 Running: ${batch.name}`);
  console.log(`Command: ${batch.command}`);

  try {
    execSync(batch.command, {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    console.log(`✅ ${batch.name} - PASSED`);
    return true;
  } catch (error) {
    console.log(`❌ ${batch.name} - FAILED`);
    console.log(`Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting Comprehensive Test Suite');
  console.log('=====================================');

  // Clean up before starting
  cleanup();

  let passed = 0;
  let failed = 0;

  for (const batch of testBatches) {
    const success = runBatch(batch);
    if (success) {
      passed++;
    } else {
      failed++;
    }

    // Small delay between batches
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('\n📊 Test Results Summary');
  console.log('=======================');
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📈 Total: ${testBatches.length}`);

  if (failed > 0) {
    console.log('\n⚠️  Some tests failed. Check the logs above for details.');
    process.exit(1);
  } else {
    console.log('\n🎉 All tests passed!');

    // Generate final report
    try {
      execSync('npx playwright show-report test-results/html-report', {
        stdio: 'inherit',
        cwd: process.cwd()
      });
    } catch (error) {
      console.log('Note: Could not open HTML report');
    }
  }
}

// Handle cleanup on exit
process.on('SIGINT', () => {
  console.log('\n🛑 Interrupted. Cleaning up...');
  cleanup();
  process.exit(0);
});

process.on('SIGTERM', () => {
  cleanup();
  process.exit(0);
});

main().catch(error => {
  console.error('❌ Test runner failed:', error);
  cleanup();
  process.exit(1);
});
