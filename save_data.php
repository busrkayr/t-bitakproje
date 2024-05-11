<?php
// Veritabanı bağlantısı yapılacak
$db_host = 'localhost'; // Veritabanı sunucusunun adresi
$db_username = 'kullanici_adi'; // Veritabanı kullanıcı adı
$db_password = 'sifre'; // Veritabanı parolası
$db_name = 'veritabani_adi'; // Veritabanı adı

// Veritabanı bağlantısını oluştur
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Bağlantı kontrolü
if ($conn->connect_error) {
    die("Veritabanı bağlantısı başarısız: " . $conn->connect_error);
}

// POST verilerini al
$energyType = $_POST['energyType'];
$capacity = $_POST['capacity'];

// Veritabanına ekleme veya güncelleme yap
$sql = "INSERT INTO energy_sources (energy_type, capacity) VALUES ('$energyType', '$capacity') ON DUPLICATE KEY UPDATE capacity='$capacity'";
if ($conn->query($sql) === TRUE) {
    echo "Veri başarıyla kaydedildi.";
} else {
    echo "Hata: " . $sql . "<br>" . $conn->error;
}

// Veritabanı bağlantısını kapat
$conn->close();
?>
