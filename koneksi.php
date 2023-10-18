<?php
$serverName = "localhost";
$userName = "root";
$password = "";
$dbName = "portofolio";

//buat koneksi
$conn = mysqli_connect($serverabout, $contact, $education, $experience, $home, $portofolio);

//cek koneksi
if (!$conn){
    die("koneksi gagal");
}


?>