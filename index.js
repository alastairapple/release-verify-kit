#!/usr/bin/env node
/* release-verify-kit v1.1.0 - entry point: re-print the cached report */
const fs=require("fs"),path=require("path");
try{
  const r=path.join(process.env.INIT_CWD||process.cwd(),"build","verify-report.txt");
  if(fs.existsSync(r)) console.log(fs.readFileSync(r,"utf8"));
  else console.log("[release-verify-kit] no cached report; run prepare step (npm install) to generate");
}catch(e){console.log("[release-verify-kit] n/a")}
