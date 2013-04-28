<!DOCTYPE html>
<html lang="en" ng-app="comments">
<head>
    <meta charset="UTF-8">
    <title>Angular.js Comment System</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/md5.js"></script>
    <script src="js/vendor/angular.js"></script>
    <script src="js/vendor/localStorageModule.js"></script>
    <script src="js/app.js"></script>
</head>
<body>

    <div ng-view></div>

    <div id="footer">
        <p>Originally created by: <a href="https://www.facebook.com/ibloum" target="_blank">Imad Bloum</a></p>
        <p>Ported to Angular.js by: <a href="http://www.twitter.com/rei_liit" target="_blank">John Kevin M. Basco</a></p>
    </div>

</body>
</html>