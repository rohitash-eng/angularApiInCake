<?php
$this->assign('title','Edit coupon');

$myTemplates = [
    'inputContainer' => '{{content}}',
    'error' => '<div class="errorMsg"><span>{{content}}</span></div>',
    ];
$this->Form->templates($myTemplates);
?>
<div class="modal-sm custom card_modal">
    <?= $this->Form->create($billingInfo,['url'=>['controller'=>'Users','action'=>'updateBilling'],'role'=>'form','id'=>'addForm','novalidate']) ?>
<div class="card card_information">
    <h2>Card Information</h2>
    <?= $this->Form->input('cardid',['type'=>'hidden','default'=>$billingInfo->user->stripe_card_id]) ?>
    <?= $this->Form->input('customerid',['type'=>'hidden','default'=>$billingInfo->user->stripe_customer_id]) ?>
    <?= $this->Form->input('id',['type'=>'hidden','default'=>$billingInfo->id]) ?>
    <div class="form-group">
        <label>Name on the Card</label>
        <div class="wrap">
            <?php echo $this->Form->input('card.name', ['label'=>false,'class'=>'form-control ui','placeholder'=>'Name on Card','required'=>true,'default'=>$cardinfo['response']['name']]); ?>  
            
            <span class="mandatory">*</span>
            
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <div class="form-group">
        <label>Card Number</label>
        <div class="wrap">
            <?php echo $this->Form->input('card.last4', ['label'=>false,'class'=>'form-control ui','placeholder'=>"xxxx-xxxx-xxxx-4587",'disabled'=>true,'default'=>'XXXX-XXXX-XXXX-'.$cardinfo['response']['last4']]); ?> 
            <span class="mandatory">*</span>
            
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <div class="form-group">
        <label>Card Expiration Date</label>
        <div class="wrap">
            <div class="customselect">
                <?php
               $month = array(
                    "1" => "January", "2" => "February", "3" => "March", "4" => "April",
                    "5" => "May", "6" => "June", "7" => "July", "8" => "August",
                    "9" => "September", "10" => "October", "11" => "November", "12" => "December",
                );
               
                ?>
                <?php echo $this->Form->input('card.exp_month', ['options'=>$month,'label'=>false,'class'=>'form-control ui','required'=>true,'empty'=>"Month",'default'=>$cardinfo['response']['exp_month']]); ?> 
               
                
            </div><!-- customselect -->
            <div class="customselect">
                <?php
                $date = new \Cake\I18n\Time();                 
                $newDateObj = clone $date;
                $maxYear = $newDateObj->modify('+10 years')->format('Y');
                $year = range($date->format('Y'), $maxYear);
                ?>
                <?php echo $this->Form->input('card.exp_year', ['options'=>array_combine($year,$year),'label'=>false,'class'=>'form-control ui','required'=>true,'empty'=>"Year",'val'=>$cardinfo['response']['exp_year']]); ?> 
                <span class="mandatory">*</span>
                
            </div><!-- customselect -->
        </div><!-- wrap -->
    </div><!-- form-group -->
   <div class="form-group">
            <label>Card Security Code /  CVV</label>
            <div class="wrap">
                    <input type="text" class="form-control ui">
                    <span class="mandatory">*</span>
                    <div class="errorMsg" style="display: none;"><span class="error">This field is required.</span></div>
            </div><!-- wrap -->        			
    </div><!-- form-group -->
</div><!-- card card_information -->
<div class="card billing_information">
    <h2>Billing Information</h2>
    <div class="form-group">
        <label>Address</label>
        <div class="wrap">
            <?php echo $this->Form->input('billing.address1', ['label'=>false,'class'=>'form-control ui','placeholder'=>'Address 1','required'=>true,'default'=>$cardinfo['response']['address_line1']]); ?>
            <span class="mandatory">*</span>
            
        </div><!-- wrap -->        			
        <div class="wrap address_two">
            <?php echo $this->Form->input('billing.address2', ['label'=>false,'class'=>'form-control ui','placeholder'=>'Address 2','default'=>$cardinfo['response']['address_line2']]); ?>       			
            
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <div class="form-group">
        <label>City</label>
        <div class="wrap">
            <?php echo $this->Form->input('billing.city', ['label'=>false,'class'=>'form-control ui','required'=>true,'placeholder'=>'city','default'=>$cardinfo['response']['address_city']]); ?>
            <span class="mandatory">*</span>
            
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <div class="form-group">
        <div class="row wrap">        				
            <div class="customselect">
                <label>State</label>
                <?php echo $this->Form->input('billing.state_id',['class'=>'form-control ui','required'=>true,'empty'=>'Select State','default'=>$cardinfo['response']['state_id']]); ?>
                
            </div><!-- customselect -->
            <div class="customselect">
                <label>Zip Code</label>
                <div class="wrap">
                    <?php echo $this->Form->input('billing.zip_code',['label'=>false,'placeholder'=>'25896','class'=>'form-control ui','required'=>true,'data-type'=>'zip','default'=>$cardinfo['response']['address_zip']]); ?>
                    <span class="mandatory">*</span>
                    
                </div><!-- wrap -->
            </div><!-- customselect -->
        </div><!-- wrap -->
    </div><!-- form-group -->
    <div class="form-group">
        <label>Phone Number</label>
        <div class="wrap">
           <?php echo $this->Form->input('billing.primary_phone',['label'=>false,'placeholder'=>'1236547896','class'=>'form-control ui','required'=>true,'data-type'=>'digit','default'=>$billingInfo['primary_phone']]); ?>
            <span class="mandatory">*</span>
            
        </div><!-- wrap -->        			
    </div><!-- form-group -->
    <br>
    <div class="action_card_save">
        <button class="btn btn-success">Continue</button>
        <button type="button" class="btn btn-cancel" data-dismiss="modal">Cancel</button>
    </div><!-- footer -->
        
    </div><!-- card billing_information -->
    <?= $this->Form->hidden('billing.state',['id'=>'billing-state','default'=>$cardinfo['response']['address_state']]); ?>
    <?= $this->Form->end(); ?>
</div>
<?= $this->Html->script(['/assets/js/validation'], ['block' => 'bottomScript']) ?>
<?php $this->Html->scriptStart(['block' => true]); ?>
    $(document).ready(function(){
        $("#billing-state-id").on('change',function(){
            $("#billing-state").val($("#billing-state-id option:selected").text());
        });
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