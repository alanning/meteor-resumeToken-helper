meteor-resumeToken-helper
=========================

A utility to generate and print a list of services.resume.loginTokens.  For use with the [meteor-load-test](https://github.com/alanning/meteor-load-test) tool.

## Usage

1. Start system under test (SUT)
2. Create users in SUT for use in load testing
3. Adjust `run` script to point to correct database
4. Execute `run` script 
5. Point browser to http://localhost:3004/
6. Enter password and paste in test user emails, one per line
7. Click 'Generate Tokens' button
8. Copy comma-deliminated string of tokens
9. Paste into `working.properties` file, `grinder.resumeTokens` property

The `meteor-load-test` tool will now randomly choose one of the resumeTokens to login with.

