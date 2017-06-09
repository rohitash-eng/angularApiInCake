<font face="arial" size="2">
<?php #pj($user);die; ?>
Hi <?= ucwords($user['fname'].' '.$user['lname']); ?>,<br><br>
<p>As per your request team has been generated the new password.</p><br>
<table style="border:1px solid #ccc;border-collapse:collapse;" border="1">
    
    <tr><td style="padding:5px;">First Name : <?= $user['fname'] ?></td></tr>
    <tr><td style="padding:5px;">Last Name : <?= $user['lname'] ?></td></tr>
    <tr><td style="padding:5px;">Email : <?= $user['email'] ?></td></tr>
    <tr><td style="padding:5px;">User Name : <?= $user['username'] ?></td></tr>    
    <tr><td style="padding:5px;"><strong>Password : <?= $user['newpassword'] ?></strong></td></tr>    
    </tr>

</table>
<br><br>
Sincerely,<br>
Face2Face Team
</font>