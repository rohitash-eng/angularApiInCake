<section class="faqs about_us">
    <div class="row">
    <div class="generic_section">
        <h2><?= $title ?></h2>
        <?= $this->Flash->render(); ?>
        <?= $this->Form->create($user,['url'=>['controller'=>'Users','action'=>'saveConsumer'],'role'=>'form','type'=>'file','id'=>'catForm','novalidate']) ?>
         
        <div class="add_name">
            <?php echo $this->Form->input('fname',['placeholder'=>'First Name','class'=>'form-control ui','required'=>true,'label' => 'First Name']); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('lname',['placeholder'=>'Last Name','class'=>'form-control ui','required'=>true,'label' => 'Last Name']); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('email',['placeholder'=>'Email','type'=>'text','class'=>'form-control ui','required'=>true,'data-type'=>'email']); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('username',['placeholder'=>'Unique Username','class'=>'form-control ui','required'=>true]); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('consumer_billing_details.0.primary_phone',['label'=>'Phone','placeholder'=>'Phone No.','class'=>'form-control ui','required'=>true,'data-type'=>'digit']); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('consumer_billing_details.0.address1',['placeholder'=>'Address','label'=>'Address','class'=>'form-control ui','required'=>true]); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('consumer_billing_details.0.zip_code',['placeholder'=>'Zip Code','class'=>'form-control ui','required'=>true,'data-type'=>'zip']); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('consumer_billing_details.0.city',['placeholder'=>'City','class'=>'form-control ui','required'=>true]); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('consumer_billing_details.0.state_id',['class'=>'form-control ui','required'=>true,'empty'=>'Select State']); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('user_subscription_plan.product_id',['options'=>$plans,'label'=>'Subscription Plan','default'=>$defaultSubscription,'class'=>'form-control ui','required'=>true]); ?>
        </div>
        
        <div class="action">                       
                <?php if(isset($user->id) && !empty($user->id)): ?>
                <span><button type="submit" class="btn btn-success"><?= __('Update') ?></button></span>
                <?php else: ?>
                <span><button type="submit" class="btn"><?= __('Add') ?></button></span>
                <?php endif; ?>          
        </div><!-- action -->
       <?= $this->Form->end() ?>     
    </div>
</div>
</section>
<?= $this->Html->script(['/assets/js/validation'], ['block' => 'bottomScript']) ?>
<?php $this->Html->scriptStart(['block' => true]); ?>
    $(document).ready(function(){
        $("#catForm").sumitForm({'callback':aftersubmit});
        function aftersubmit(response){
            if(response.status == true){
                window.parent.$('#deleted').find("#alert-dismiss").addClass("reload");
                window.parent.$('#iframModal').modal('hide');
                window.parent.showAlert(response.message);
            }else{
                window.parent.showAlert(response.message);
            }
       }
    });
<?php $this->Html->scriptEnd(); ?>