<?php 
	require_once("connDB.php");
	
	$mail = $_POST["mail"];
	
	
	//連接資料庫
		//只要此頁面上有用到連接MySQL就要include它
		//include("mysql_connect.inc.php");
		//$id = $_POST['id'];
		//$pw = $_POST['pw'];

		//搜尋資料庫資料
		$sql1 = "SELECT * FROM members where mail = '$mail'";
		$result1 = mysqli_query($conn, $sql1);
		$row1 = @mysqli_fetch_row($result1);

		//判斷帳號與密碼是否為空白
		//以及MySQL資料庫裡是否有這個會員
		if($mail != null && $row1[3] == $mail )
		{
		        //將帳號寫入session，方便驗證使用者身份
		        $_SESSION['mail'] = $mail;
		        echo '身份確認,登入成功!';
		        echo '<meta http-equiv=REFRESH CONTENT=1;url=kkday.html>';
		}
		else
		{
		        echo '登入失敗!';
		        echo '<meta http-equiv=REFRESH CONTENT=1;url=kkday.html>';
		}
	
	
?>