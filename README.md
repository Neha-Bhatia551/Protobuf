# Protocol Buffers: Achieving a 56.78% File Size Reduction Compared to JSON


### Overview
Protocol Buffers (Protobuf) is a language-neutral and platform-neutral mechanism for serializing structured data. It allows you to encode data into a compact binary format, making it more efficient for storage and communication compared to formats like JSON.

Protocol buffers documentation - https://protobuf.dev/overview/

This project demonstrates the difference in sizes between storing data as JSON and as binary data using Protocol Buffers.

---
### What This Project Demonstrates
By comparing the sizes of files generated in JSON and binary formats, this project highlights the efficiency of Protocol Buffers for data serialization.

Results - 

JSON File Size: 118B

Binary File Size: 51B

Improvement: ~56.78%

![alt text](<Screenshot 2024-12-02 at 12.35.10 AM.png>)

---
### Prerequisites

Before running this project, ensure you have the following tools installed:

1. Protocol Buffers Compiler (protoc)
Download the Protocol Buffers Compiler from the official GitHub releases page and install it - https://github.com/protocolbuffers/protobuf/releases

2. protoc-gen-js Plugin
Install the JavaScript plugin for protoc:
npm install -g protoc-gen-js

3. Google Protocol Buffers Library
Install the google-protobuf library for JavaScript:
npm install google-protobuf

---
### Setting Up the Project
Step 1: Generate JavaScript Code from the .proto File
Run the following command to generate JavaScript code from your .proto file:

/Users/nehabhatia/Downloads/protoc-29.0-osx-x86_64/bin/protoc \
  --js_out=import_style=commonjs,binary:. employees.proto

Step 2: Run the code, initally run index.js to get data in json file , and next change your JS config to run index2.js to get data in binary format. The code will save Data in JSON and Binary Formats

This project saves the same dataset in two formats:

JSON: Human-readable format.
Binary (Protobuf): Compact, efficient binary format.

---

### Resources

I referred to this YouTube video for understanding and setting up Protocol Buffers in JavaScript:
https://www.youtube.com/watch?v=46O73On0gyI&t=480s&ab_channel=HusseinNasser