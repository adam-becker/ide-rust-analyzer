const childProcess = require("child_process");
const {AutoLanguageClient} = require("atom-languageclient");

class RustAnalyzerLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["source.rust"];
  }

  getLanguageName() {
    return "rust";
  }

  getServerName() {
    return "rust-analyzer";
  }

  startServerProcess(projectPath) {
    return childProcess.spawn("rust-analyzer", [], { cwd: projectPath });
  }
}

module.exports = new RustAnalyzerLanguageClient();
