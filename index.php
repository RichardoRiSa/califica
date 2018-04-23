<!doctype html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/buttons.css">

    <title>Califica</title>
  </head>
  <body>
    <form action="index.php" method="POST" >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Configuracion</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link">Evidencias </a>
          <input type="number" min="1" max="5" class="form-control" value="<?php if (isset($_POST['Aciertos'])) { echo $_POST['Evidencias']; } ?>" name="Evidencias">
          <a class="nav-link">Aciertos </a>
          <input type="number" min="5" max="100" class="form-control" value="<?php if (isset($_POST['Aciertos'])) { echo $_POST['Aciertos']; } ?>" name="Aciertos"> 
          <input type="submit" class="btn btn-dark btnlisto" value="Listo">
        </div>
      </div>
    </nav>
    </form>
    <br>
    <div class="container"><!-- Inicia container -->
      <?php if (isset($_POST['Evidencias'])) { ?>
        <?php for ($i=0; $i < $_POST['Evidencias']; $i++) { ?>
        
          <div class="row"> <!-- Inicia row evidencia <?php echo $i+1; ?> -->
            <div class="col-lg-3 col-ms">
            </div>
            <div class="col-lg-2 col-ms">
              <label><h2>Evidencia<?php echo $i+1; ?></h2></label>
            </div>
            <div class="col-lg-6 col-ms">
              <button type="button" onclick="evi('Var<?php echo $i+1; ?>EN',<?php echo $i; ?>,0)" id="Var<?php echo $i+1; ?>EN" class="btn btn-primary">N/P</button>
              <button type="button" onclick="evi('Var<?php echo $i+1; ?>E1',<?php echo $i; ?>,1)" id="Var<?php echo $i+1; ?>E1" class="btn btn-primary">1</button>
              <button type="button" onclick="evi('Var<?php echo $i+1; ?>E2',<?php echo $i; ?>,2)" id="Var<?php echo $i+1; ?>E2" class="btn btn-primary">2</button>
              <button type="button" onclick="evi('Var<?php echo $i+1; ?>E3',<?php echo $i; ?>,3)" id="Var<?php echo $i+1; ?>E3" class="btn btn-primary">3</button>
              <button type="button" onclick="evi('Var<?php echo $i+1; ?>E4',<?php echo $i; ?>,4)" id="Var<?php echo $i+1; ?>E4" class="btn btn-primary">4</button>
              <button type="button" onclick="evi('Var<?php echo $i+1; ?>E5',<?php echo $i; ?>,5)" id="Var<?php echo $i+1; ?>E5" class="btn btn-primary">5</button>
              <button type="button" onclick="evi('Var<?php echo $i+1; ?>E6',<?php echo $i; ?>,6)" id="Var<?php echo $i+1; ?>E6" class="btn btn-primary">6</button>
              <button type="button" onclick="evi('Var<?php echo $i+1; ?>E7',<?php echo $i; ?>,7)" id="Var<?php echo $i+1; ?>E7" class="btn btn-primary">7</button>
              <button type="button" onclick="evi('Var<?php echo $i+1; ?>E8',<?php echo $i; ?>,8)" id="Var<?php echo $i+1; ?>E8" class="btn btn-primary">8</button>
              <button type="button" onclick="evi('Var<?php echo $i+1; ?>E9',<?php echo $i; ?>,9)" id="Var<?php echo $i+1; ?>E9" class="btn btn-primary">9</button>
              <button type="button" onclick="evi('Var<?php echo $i+1; ?>E10',<?php echo $i; ?>,10)" id="Var<?php echo $i+1; ?>E10" class="btn btn-primary">10</button>
            </div>
          </div><!-- Fin row evidencia <?php echo $i+1; ?> -->

        <?php } // fin del for ?> 

      <?php } // fin del if ?>

      <br>
      <?php if (isset($_POST['Aciertos'])) { ?>
        <h2>Numero de aciertos</h2>
        <div class="row"> <!-- Inicia row examen -->
          <div class="col-lg-12 col-ms " id="NumeroAciertos">
            <?php for ($i=0; $i < $_POST['Aciertos']; $i++) { ?>
              <button type="button" class="btn btn-primary cb"><?php echo $i+1; ?></button>
            <?php } // fin del for ?>
          </div>
        </div><!-- Fin row examen -->
      <?php } // fin del if ?>
    </div><!-- Fin container -->
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/funciones.js"></script>
  </body>
</html>