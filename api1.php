<?php 
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');

//hubungkan ke database
include "koneksi.php";
//hubungkan ke fungsi.php
include "fungsi.php";
//Inisialisasi array utk menyimpan data berita
$data = array();
//http://localhost/web23/api.php?id=1
if(isset($_GET['id']) && cekId($_GET['id'])) {
    $id = $_GET['id'];

    //Query utk mengambil data berita berdasarkan ID
    $sql = "SELECT * FROM about WHERE id=$id";
    //Eksekusi Query
    $result = mysqli_query($conn, $sql);

    //cek apakah data ditemukan
    if(mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $data = $row;
    }
    else {
        //Jika data tidak ditemukan, kirim respon JSON dg pesan error
        $data['error'] = 'Data tidak ditemukan';
    }
}
else { //http://localhost/web23/api.php?id=selain angka
    $data['error'] = 'Invalid ID'; //jika ID invalid atau id tdk diberikan
}
//tampilkan data dalam format JSON
echo json_encode($data);

//tutup koneksi database
mysqli_close($conn);

?>