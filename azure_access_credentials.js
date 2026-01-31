const AZURE_AUTH_HEADER = {
  Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhcGk6Ly9ncmFwaC5taWNyb3NvZnQuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnQuY29tL3RlbmFudDEyMy92Mi4wIiwic3ViIjoiMTIzNDU2Iiwic2NvcGUiOiJVc2VyLlJlYWQifQ.VeryFakeSignatureForTestingOnly"
};

// Azure token in JSON response style
const azureTokenResponse = {
  token_type: "Bearer",
  expires_in: 3600,
  access_token: "eyJraWQiOiJrZXkxMjMiLCJhbGciOiJSUzI1NiJ9.eyJhcHBpZCI6ImFiY2QtMTIzNCIsImV4cCI6MTcwMDAwMDAwMCwicm9sZXMiOlsiUmVhZCJdfQ.FakeAzureSignatureForDemo"
};
