<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?= $this->Html->meta('favicon.ico','/assets/fav-icon.ico',['type' => 'icon']);
?>
  <title>Admin Sign In</title>

  <!-- Bootstrap CSS -->
  <?= $this->Html->css(['/assets/css/bootstrap','/assets/css/login_style','/assets/css/login_color','/assets/css/font-awesome.min']) ?>
  <?= $this->Html->script(['/assets/js/jquery']) ?>
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>

<body>
<!-- Header --> 
<header>
  <div class="container">
    <!-- logo --> 
    <a href="<?php $this->Url->build('/',true); ?>" title="Face2face" class="logo"><?= $this->Html->image('/assets/img/logo.jpg',['alt'=>'Face2face']) ?></a>
    <!-- right-header --> 
    <div class="header-right">
      <form class="search-input" novalidate>
        <button type="submit" class="fa fa-search">Submit</button>
        <input name="search-input" class="form-control" value="Search" onblur="if (this.value=='') this.value = 'Search'" onfocus="if (this.value=='Search') this.value = ''" type="text">
      </form>
      <ul class="header-social clearfix">
        <li><a href="#" class="fa fa-twitter" data-toggle="tooltip" data-placement="bottom" title="Twitter">Twitter</a></li>
        <li><a href="#" class="fa fa-youtube-play" data-toggle="tooltip" data-placement="bottom" title="Youtube">Youtube</a></li>
        <li><a href="#" class="fa fa-facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook">Facebook</a></li>
        <li><a href="#" class="fa fa-linkedin" data-toggle="tooltip" data-placement="bottom" title="Linkedin">Linkedin</a></li>
        <li><a href="#" class="fa fa-pinterest-p" data-toggle="tooltip" data-placement="bottom" title="Pinterest">Pinterest</a></li>
        <li><a href="#" class="fa fa-google-plus" data-toggle="tooltip" data-placement="bottom" title="Google plus">Google plus</a></li>
      </ul>
      <ul class="head-nav clearfix">
        <!-- <li><a href="#">info@face2face.com</a></li> -->
        <li><a href="#" title="Call Us">+1 1800 456 7890</a></li>
        <li><a href="#" title="About us">About Us</a></li>
        <li><a href="#" title="Contact Us">Contact Us</a></li>
        <li><a href="#" title="Sign Up" class="btn btn-warning">Sign Up</a></li>
      </ul>
    </div>
  </div>

  <!-- Category Nav -->
  <div class="category-nav">
    <div class="container">
      <ul class="nav navbar-nav pull-right">
        <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Patients <i class="fa fa-angle-down" aria-hidden="true"></i></a>
          <ul class="dropdown-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Where to Start?</a></li>
            <li><a href="#">Sign Up</a></li>
            <li class="dropdown-submenu"> <a tabindex="-1" href="#">General Health</a>
              <ul class="dropdown-menu">
                <li><a tabindex="-1" href="#">Virtual Health</a></li>
                <li><a tabindex="-1" href="#">On-Demand Appointment</a></li>
                <li><a tabindex="-1" href="#">Scheduled Appointment</a></li>
                <li><a tabindex="-1" href="#">Concierge Services</a></li>
                <li><a tabindex="-1" href="#">E-Learning</a></li>
                <li><a tabindex="-1" href="#">Communities</a></li>
              </ul>
            </li>
            <li><a href="#">Movement, Language &amp; Development</a></li>
            <li><a href="#">Emotional &amp; Mental Health</a></li>
            <li><a href="#">Mind, Body &amp; Nutrition</a></li>
            <li><a href="#">Education, Advocacy, Coaching &amp; Tutoring</a></li>
            <li><a href="#">Virtual Health</a></li>
            <li><a href="#">E-Learning</a></li>
            <li><a href="#">Communities</a></li>
          </ul>
        </li>
        <li class="dropdown"> <a href="#menu-caret" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Providers <i class="fa fa-angle-down" aria-hidden="true"></i></a>
          <ul class="dropdown-menu">
            <!-- <li class="dropdown-heading">INDIVIDUAL PROVIDERS</li> -->
            <li class="dropdown-heading">INDIVIDUAL PROVIDERS</li>
            <li><a href="#">Benefits</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Training</a></li>
            <li class="dropdown-heading">PRACTICE GROUPs</li>
            <li><a href="#">Benefits</a></li>
            <li><a href="#">Technology</a></li>
          </ul>
        </li>
        <li><a href="#">BUSINESS</a></li>
      </ul>
    </div>
  </div>
</header>

<!-- Main Content -->
<section class="main-content">
  <div class="container">
    <!-- Main Heading -->
    <div class="main-heading">
      <h2>Sign In</h2>
    </div>
    <!-- Form Start Here -->
    <?= $this->Form->create(null,['class'=>'form-inputs','id'=>'adminSignin','novalidate']); ?>
    <!-- Flash error Box Msg -->
      <div class="flashMsg">
          
            <?php echo$this->Flash->render() ?>
            <?= $this->Flash->render('Auth') ?>
        
      </div><!-- flashMsg -->
                              <!-- Flash error Box Msg -->

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="username-email">Username or Email</label>
            <?= $this->Form->input('username', ['type'=>'text','label' => false,'class' => 'email form-control','required'=>true,'data-type'=>'email','default'=>$cookieItems['username']]) ?>            
            <span class="mandatory">*</span>
            <div class="errorMsg"></div><!-- errorMsg -->
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <?= $this->Form->input('password', ['label' => false,'class' => 'form-control','required'=>true,'autocomplete'=>'off','default'=>$cookieItems['password']]) ?>            
            <span class="mandatory">*</span> 
            <div class="errorMsg"></div><!-- errorMsg -->
          </div>
          <div class="form-group">
            <div class="checkbox signin-checkbox">
              <label class="control control--checkbox">
              Keep me logged in
              <input type="checkbox" name="rememberme" value="1" class="form-control" id="rememberme" <?php echo ($cookieItems['password'])?'checked':''; ?>>
              
              <span class="control__indicator"></span>
              </label>
            </div>
            <a href="#" class="forgot-password" title="Forgot Password">Forgot Password?</a>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-warning" id="sign-in">Sign In</button>
    <?= $this->Form->end() ?>
  </div>
</section>


<!-- Footer -->
<footer>
  <div class="social-strip">
    <div class="container">
      <ul class="clearfix">
        <li><a href="#" class="fa fa-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">Twitter</a></li>
        <li><a href="#" class="fa fa-youtube-play" data-toggle="tooltip" data-placement="top" title="Youtube">Youtube</a></li>
        <li><a href="#" class="fa fa-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">Facebook</a></li>
        <li><a href="#" class="fa fa-linkedin" data-toggle="tooltip" data-placement="top" title="Linkedin">Linkedin</a></li>
        <li><a href="#" class="fa fa-pinterest-p" data-toggle="tooltip" data-placement="top" title="Pinterest">Pinterest</a></li>
        <li><a href="#" class="fa fa-google-plus" data-toggle="tooltip" data-placement="top" title="Google plus">Google plus</a></li>
      </ul>
    </div>
  </div>
  <div class="footer">
    <div class="container"> 
        <?= $this->Html->image('/assets/img/footer-logo.png',['alt'=>'footer-logo']) ?>
      <ul class="clearfix">
        <li><a href="#" title="Our Model">Our Model</a></li>
        <li><a href="#" title="Privacy Terms">Privacy Terms</a></li>
        <li><a href="#" title="Consent">Consent</a></li>
        <li><a href="#" title="FAQ">FAQ</a></li>
        <li><a href="#" title="Contact">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="copyright">
    <p>All rights reserved to Face2Face health, LLC 2016</p>
  </div>
</footer>


<!-- Password Change Modal -->
<div class="modal fade passwrd-changed" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
  <div class="vertical-alignment-helper">
    <div class="modal-dialog vertical-align-center" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <h4 id="myModalLabel">Password Changed Succesfully</h4>
          <button type="button" class="btn btn-warning">Return to Sign In</button>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- jquery --> 
  <?= $this->Html->script(['/assets/js/bootstrap.min','/assets/js/login']) ?>
</body>
</html>