<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SimpleStorage</title>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
    <script src="app.js" defer></script>
</head>
<body>
    <h1>Simple Storage Contract</h1>
    <div>
        <label for="valueInput">Set Value:</label>
        <input type="number" id="valueInput">
        <button onclick="setValue()">Set Value</button>
    </div>
    <div>
        <button onclick="getValue()">Get Value</button>
        <p id="valueOutput"></p>
    </div>
    <div>
        <button onclick="getOwner()">Get Owner</button>
        <p id="ownerOutput"></p>
    </div>
</body>
</html>
