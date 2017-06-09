<?php
#use Cake\Core\Configure;
$cakeDescription = 'Face2Face Health';
?>
<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $this->fetch('title') ?> | <?= $cakeDescription ?>
    </title>
    <?= $this->Html->meta('favicon.ico','/assets/fav-icon.ico',['type' => 'icon']); ?>
    <?= $this->Html->css(['/assets/css/bootstrap','/assets/css/font-awesome.min','/assets/css/sidebar','/assets/css/style','/assets/css/custom']) ?>
    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>    
    <?= $this->Html->script('/assets/js/jquery'); ?>
    <script type="text/javascript">var baseUrl = '<?php echo $this->Url->build('/',true); ?>';</script>
</head>
<body class="body_iframe">
    
        
           <?= $this->fetch('content') ?>
       
    
</body>
</html>
<?= $this->Html->script(['/assets/js/bootstrap.min','/assets/js/inhouse','/assets/js/main']); ?>
<?= $this->fetch('bottomScript'); ?>
<?= $this->fetch('script'); ?>
