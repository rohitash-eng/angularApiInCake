<?php
$myTemplates = [
    'inputContainer' => '{{content}}',
    'error' => '<div class="errorMsg"><span>{{content}}</span></div>',
    ];
$this->Form->templates($myTemplates);
?>
<div class="modal-sm custom card_modal">
    <?= $this->Form->create($billingInfo,['url'=>['controller'=>'Users','action'=>'updateProviderBilling'],'role'=>'form','id'=>'addForm','novalidate']) ?>
    
<div class="card card_information">
    <?= $this->Form->input('id',['type'=>'hidden','default'=>$billingInfo->id]) ?>
    <?php if($billingInfo->payment_method == 'bank'): ?>
    <div class="form-group">
        <label>Bank Name</label>
        <div class="wrap">
            <?php echo $this->Form->input('bank_name', ['label'=>false,'class'=>'form-control ui','placeholder'=>'Bank Name','required'=>true,'default'=>$billingInfo['bank_name'],'required'=>true]); ?>            <span class="mandatory">*</span>
            
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <div class="form-group">
        <label>Routing Number</label>
        <div class="wrap">
            <?php echo $this->Form->input('routing_number', ['label'=>false,'class'=>'form-control ui','placeholder'=>"Routing number",'default'=>$billingInfo['routing_number'],'required'=>true]); ?> 
            <span class="mandatory">*</span>
            
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <div class="form-group">
        <label>Account Number</label>
        <div class="wrap">
            <?php echo $this->Form->input('account_number', ['label'=>false,'class'=>'form-control ui','placeholder'=>"Account number",'default'=>$billingInfo['Account_number'],'data-type'=>'digit','required'=>true]); ?> 
            <span class="mandatory">*</span>
            
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <!--<div class="form-group">
        <label>Confirm Account Number</label>
        <div class="wrap">
            <?php echo $this->Form->input('account_number_confirm', ['label'=>false,'class'=>'form-control ui','placeholder'=>"Confirm Account Number",'required'=>true,'data-type'=>'digit']); ?> 
            <span class="mandatory">*</span>
        </div>		
    </div><!-- form-group -->
    <div class="form-group">
        <label>Account Type</label>
        <div class="wrap">
            <?php echo $this->Form->input('account_type', ['label'=>false,'class'=>'form-control ui','placeholder'=>"Account Type",'default'=>$billingInfo['account_type'],'required'=>true]); ?> 
            <span class="mandatory">*</span>
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <div class="form-group">
        <label>Branch Address</label>
        <div class="wrap">
            <?php echo $this->Form->input('branch_address', ['label'=>false,'class'=>'form-control ui','placeholder'=>"Branch Address",'default'=>$billingInfo['branch_address'],'required'=>true]); ?> 
            <span class="mandatory">*</span>
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <?php else: ?>
    <div class="form-group">
        <label>Cheque In Favour Of</label>
        <div class="wrap">
            <?php echo $this->Form->input('cheque_in_favor_off', ['label'=>false,'class'=>'form-control ui','placeholder'=>"Cheque In Favour Of",'default'=>$billingInfo['cheque_in_favor_off'],'required'=>true]); ?> 
            <span class="mandatory">*</span>
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <div class="form-group">
        <label>Mailing Address</label>
        <div class="wrap">
            <?php echo $this->Form->input('mailing_address', ['label'=>false,'class'=>'form-control ui','placeholder'=>"Mailing Address",'default'=>$billingInfo['mailing_address'],'required'=>true]); ?> 
            <span class="mandatory">*</span>
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <?php endif; ?>
    <br>
    <div class="action_card_save">
        <button class="btn btn-success">Continue</button>
        <button type="button" class="btn btn-cancel" data-dismiss="modal">Cancel</button>
    </div><!-- footer -->
</div><!-- card card_information -->

    <?= $this->Form->end(); ?>
</div>
<?= $this->Html->script(['/assets/js/validation'], ['block' => 'bottomScript']) ?>
<?php $this->Html->scriptStart(['block' => true]); ?>
    $(document).ready(function(){
        $("#addForm").sumitForm({'callback':aftersubmit});
        function aftersubmit(response){
            if(response.status == true){
                window.parent.$('#deleted').find("#alert-dismiss").addClass("reload");
                window.parent.$('#iframModal').modal('hide');
                window.parent.showAlert(response.message);
            }else{
                window.parent.showAlert(response.message);
            }
            
       }
       $(".btn-cancel").on('click',function(){
            window.parent.$('#iframModal').modal('hide');
            
       });
    });
<?php $this->Html->scriptEnd(); ?>