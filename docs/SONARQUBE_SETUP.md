# SonarQube Setup and Configuration Guide

This guide explains how to set up and use SonarQube for code quality analysis in the E-commerce React project.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- SonarQube server (local or cloud instance)
- SonarQube token for authentication

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Quality Analysis

```bash
# Complete quality analysis pipeline
npm run quality:check

# Or run individual steps
npm run lint:report
npm run test:coverage
npm run sonar
```

## 🔧 Configuration

### SonarQube Project Properties

The `sonar-project.properties` file contains the main configuration:

```properties
# Project identification
sonar.projectKey=bhautikbhalani_e-commerce
sonar.projectName=E-commerce React Application
sonar.projectVersion=1.0.0

# Source code paths
sonar.sources=src
sonar.tests=src
sonar.test.inclusions=**/*.test.ts,**/*.test.tsx,**/*.spec.ts,**/*.spec.tsx

# TypeScript configuration
sonar.typescript.lcov.reportPaths=coverage/lcov.info
sonar.typescript.tsconfigPath=tsconfig.json

# Coverage and exclusions
sonar.coverage.exclusions=**/*.test.ts,**/*.test.tsx,**/*.spec.ts,**/*.spec.tsx
sonar.exclusions=**/node_modules/**,**/dist/**,**/build/**,**/coverage/**
```

### Environment Variables

Set up the following environment variables:

```bash
# For local SonarQube instance
export SONAR_HOST_URL=http://localhost:9000
export SONAR_TOKEN=a598fb63b983d33a919a94aefa66c09ca3b7f276

# For SonarCloud
export SONAR_HOST_URL=https://sonarcloud.io
export SONAR_TOKEN=a598fb63b983d33a919a94aefa66c09ca3b7f276
```

## 📊 Quality Gates

### Default Quality Gate Criteria

- **Code Coverage**: Minimum 70% for branches, functions, lines, and statements
- **Code Duplication**: Less than 3% duplicated code
- **Security Hotspots**: No high or medium security hotspots
- **Code Smells**: Less than 5% code smells
- **Bugs**: No critical or blocker bugs

### Customizing Quality Gates

You can customize quality gates in your SonarQube instance:

1. Go to Administration > Quality Gates
2. Create a new quality gate or modify existing one
3. Add conditions based on your requirements
4. Set the quality gate as default for your project

## 🧪 Testing Configuration

### Vitest Setup

The project uses Vitest for testing with coverage reporting:

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70,
        },
      },
    },
  },
});
```

### Running Tests

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test -- --watch
```

## 🔍 ESLint Integration

### ESLint Configuration

ESLint is configured to generate reports compatible with SonarQube:

```bash
# Generate ESLint report
npm run lint:report

# Fix ESLint issues
npm run lint:fix
```

### ESLint Rules

The project uses strict ESLint rules for:

- TypeScript best practices
- React hooks rules
- Code formatting consistency
- Potential bugs and code smells

## 🚀 CI/CD Integration

### GitHub Actions

The project includes a GitHub Actions workflow for automated SonarQube analysis:

```yaml
# .github/workflows/sonarqube.yml
name: SonarQube Analysis
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
```

### Required Secrets

Set up the following secrets in your GitHub repository:

- `SONAR_TOKEN`: Your SonarQube authentication token
- `SONAR_HOST_URL`: Your SonarQube server URL

## 📈 Metrics and Reports

### Code Quality Metrics

SonarQube analyzes the following metrics:

- **Reliability**: Bugs and their severity
- **Security**: Vulnerabilities and security hotspots
- **Maintainability**: Code smells and technical debt
- **Coverage**: Test coverage for all code paths
- **Duplications**: Code duplication percentage

### Viewing Reports

1. **SonarQube Dashboard**: Access your project dashboard
2. **Quality Gate Status**: Check if your code passes quality gates
3. **Issues**: Review and fix identified issues
4. **Coverage**: Analyze test coverage gaps
5. **Security**: Review security vulnerabilities

## 🛠️ Troubleshooting

### Common Issues

1. **Authentication Errors**

   ```bash
   # Verify your token
   echo $SONAR_TOKEN

   # Test connection
   curl -u $SONAR_TOKEN: $SONAR_HOST_URL/api/system/status
   ```

2. **Coverage Report Issues**

   ```bash
   # Regenerate coverage report
   npm run test:coverage

   # Check if lcov.info exists
   ls -la coverage/lcov.info
   ```

3. **ESLint Report Issues**

   ```bash
   # Regenerate ESLint report
   npm run lint:report

   # Check if eslint-report.json exists
   ls -la eslint-report.json
   ```

### Debug Mode

Run SonarQube scanner in debug mode:

```bash
# Enable debug logging
export SONAR_LOG_LEVEL=DEBUG
npm run sonar
```

## 📚 Best Practices

### Code Quality

1. **Write Tests**: Ensure high test coverage
2. **Follow Standards**: Adhere to ESLint and TypeScript rules
3. **Review Issues**: Regularly review and fix SonarQube issues
4. **Documentation**: Keep code documentation up to date

### Performance

1. **Optimize Builds**: Use efficient build configurations
2. **Monitor Metrics**: Track performance metrics over time
3. **Refactor Code**: Address technical debt regularly

### Security

1. **Security Scans**: Run regular security scans
2. **Dependency Updates**: Keep dependencies updated
3. **Code Reviews**: Review code for security issues

## 🔗 Useful Links

- [SonarQube Documentation](https://docs.sonarqube.org/)
- [SonarCloud Documentation](https://sonarcloud.io/documentation)
- [ESLint Documentation](https://eslint.org/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📞 Support

For issues related to:

- **SonarQube Configuration**: Check the official documentation
- **Project Setup**: Review this guide and package.json scripts
- **CI/CD Issues**: Check GitHub Actions logs and secrets configuration
