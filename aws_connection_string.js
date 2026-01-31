/**
 * CONFIDENTIAL – INTERNAL USE ONLY
 * Demo file for security testing and DLP validation
 * DO NOT USE REAL CREDENTIALS
 */

// ===============================
// AWS Credentials (Synthetic)
// ===============================
const AWS_CONFIG = {
  aws_access_key_id: "AKIAIOSFODNN7EXAMPLE",
  aws_secret_access_key: "wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY",
  region: "us-east-1"
};

// Alternate format (env-style)
process.env.AWS_ACCESS_KEY_ID = "ASIAQWER1234EXAMPLE";
process.env.AWS_SECRET_ACCESS_KEY = "ABCD1234abcdEFGH5678ijklMNOPQRSTuvWX+/=";


// ===============================
// Azure / OAuth Access Token (JWT)
// ===============================
const AZURE_AUTH_HEADER = {
  Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhcGk6Ly9ncmFwaC5taWNyb3NvZnQuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnQuY29tL3RlbmFudDEyMy92Mi4wIiwic3ViIjoiMTIzNDU2Iiwic2NvcGUiOiJVc2VyLlJlYWQifQ.VeryFakeSignatureForTestingOnly"
};

// Azure token in JSON response style
const azureTokenResponse = {
  token_type: "Bearer",
  expires_in: 3600,
  access_token: "eyJraWQiOiJrZXkxMjMiLCJhbGciOiJSUzI1NiJ9.eyJhcHBpZCI6ImFiY2QtMTIzNCIsImV4cCI6MTcwMDAwMDAwMCwicm9sZXMiOlsiUmVhZCJdfQ.FakeAzureSignatureForDemo"
};


// ===============================
// Generic OAuth / JWT Token
// ===============================
const SERVICE_JWT = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzZXJ2aWNlLWFjY291bnQiLCJpYXQiOjE3MDAwMDAwMDAsImVudiI6InByb2QifQ.DemoJWTSignatureOnly";


// ===============================
// Logging (Bad Practice – Intentional)
// ===============================
console.log("AWS Secret:", AWS_CONFIG.aws_secret_access_key);
console.log("Azure Token:", AZURE_AUTH_HEADER.Authorization);
console.log("Service JWT:", SERVICE_JWT);


// ===============================
// Notes
// ===============================
// - This file intentionally contains credentials for testing.
// - Use it to validate:
//   • Regex detection
//   • Secret scanning
//   • DLP enforcement
//   • Policy inspectors
