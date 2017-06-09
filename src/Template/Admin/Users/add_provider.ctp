<?php 
$loggedUser = $this->request->session()->read('Auth.User');
$role = \Cake\Core\Configure::read('role');
$groupId = '';
if($loggedUser['role']==$role[3]){
    $groupId = $loggedUser['group_id'];
}
?>
<section class="faqs about_us">
    <div class="row">
    <div class="generic_section">
        <h2><?= $title ?></h2>
        <?= $this->Flash->render(); ?>
        <?= $this->Form->create($user,['url'=>['controller'=>'Users','action'=>'saveProvider'],'role'=>'form','type'=>'file','id'=>'catForm','novalidate']) ?>
         <?= $this->Form->input('group_id',['type'=>'hidden','default'=>$groupId]) ?>
        <div class="add_name">
            <?php echo $this->Form->input('fname',['label'=>'First Name','placeholder'=>'First Name','class'=>'form-control ui','required'=>true]); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('lname',['label'=>'Last Name','placeholder'=>'Last Name','class'=>'form-control ui','required'=>true]); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('email',['placeholder'=>'Email','type'=>'text','class'=>'form-control ui','required'=>true,'data-type'=>'email']); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('username',['placeholder'=>'Unique Username','class'=>'form-control ui','required'=>true]); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('provider_profile.provider_type_id',['empty'=>'Select Provider Type','options'=>$providerTypes,'label'=>'Provider Type','placeholder'=>'Provider Type','class'=>'form-control ui','required'=>true]); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('provider_profile.speciality_id',['empty'=>'Select Silo Type','options'=>$specialities,'label'=>'Speciality','placeholder'=>'Silo Type','class'=>'form-control ui','required'=>true]); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('provider_profile.home_phone',['label'=>'Phone','placeholder'=>'Phone No.','class'=>'form-control ui','required'=>true,'data-type'=>'phone']); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('provider_profile.address1',['placeholder'=>'Address','label'=>'Address','class'=>'form-control ui','required'=>true]); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('provider_profile.zip',['placeholder'=>'Zip Code','class'=>'form-control ui','required'=>true,'data-type'=>'zip']); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('provider_profile.city',['placeholder'=>'City','class'=>'form-control ui','required'=>true]); ?>
        </div>
        <div class="add_name">
            <?php echo $this->Form->input('provider_profile.state_id',['options'=>$states,'class'=>'form-control ui','required'=>true,'empty'=>'Select State']); ?>
        </div>
        
        
        <div class="action">                       
                <?php if(!empty($user->fname)): ?>
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
       $("#provider-profile-provider-type-id").on('change',function(){
            $.post(baseUrl+'admin/blogs/providerType/',{'ids':$(this).val()},function(response){
                if(response.status == true ){
                    var $elemOption = $("#provider-profile-speciality-id");
                    $elemOption.empty();
                    $.each(response['result'], function(key, value) {                        
                        $elemOption.append($("<option></option>").attr("value", key).text(value));
                    });
                }
            },'json');
       });
    });
<?php $this->Html->scriptEnd(); ?>