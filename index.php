<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    <script src='main.js'></script>
    <title>Document</title>
</head>
<body>
<div class="container bg-light pt-2">
<div class="col-lg-3">
    <form onsubmit="validalas">
        <div>
            <label>Mintaszöveg:</label>
    </div>
        <div>
        <input type="text" name="mintaszoveg" id="mintaszoveg" class="form-control" oninput="inputSzoveg();">
        <div class="invalid-feedback" id="hibaSzoveg"></div>
    </div>
        <div>
            <label>Betűméret:</label>
    </div>
        <div>
            <input type="number" name="betumeret" id="betumeret" class="form-control" oninput="inputBetu();">
            <div class="invalid-feedback" id="hibaBetumeret"></div>
    </div>
        <div>
            <label>Szövegszín:</label>
    </div>
        <div>
            <input type="color" name="szovegszin" id="szovegszin" value="#000000" class="form-control" oninput="inputSzovegszin();">
    </div>
        <div>
            <label>Háttérszín:</label>
    </div>
        <div>
            <input type="color" name="hatterszin" id="hatterszin" value="#FFFFFF" class="form-control" oninput="inputHatterszin();">
    </div>
        <div style="text-align:center;">
            <button type="button" class="btn btn-secondary" name="btn" id="btn" onclick="alaphelyzet();">Alaphelyzet</button>
    </div>
</div>
    </form>
</div>
<br>
<h3>Előnézet</h3>
<div class="container">
    <p id="kiiras"></p>
</div>
</body>
</html>