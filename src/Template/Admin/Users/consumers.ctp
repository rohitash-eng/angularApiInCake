<?php
$this->assign('title','Manage Consumers');
#pj($users);die;
?>
<section class="patient_users">
    <h1 class="heading">Users</h1>
   <div class="types_records groups">
        <div class="actions">            
            <div class="edit">
            <a type="button" href="<?= $this->Url->build(['controller'=>'Users','action'=>'addconsumer'],'true') ?>" id="addFrmBtn" class="btn edit_record frmBtn" title="Add">Add</a>            
        </div>
        <div class="edit">
            <a type="button" href="<?= $this->Url->build(['controller'=>'Users','action'=>'addconsumer'],'true') ?>" id="editFrmBtn" class="btn edit_record frmBtn" title="Edit">Edit</a>            
        </div>
        <div class="add">
            <a type="button" href="<?= $this->Url->build(['controller'=>'Users','action'=>'resetPassword'],'true') ?>" id="reset-password" class="btn " title="Password Reset">Password Reset</a>
        </div>    
        <div class="remove">
            <a href="javascript:void(0)" type="button" class="btn btn-danger remove_record removeBtn" title="Remove">Remove</a>
        </div>	
        </div><!-- actions -->       
        <div class="records-lists ajax-response">
           <?= $this->Form->create('null', ['id' => 'liveForm','url'=>['controller'=>'Users','action'=>'index']]) ?>
            <table class="table table-boradered" id="listTable">
                <colgroup width="3%"></colgroup>
                <colgroup width="10%"></colgroup>
                <colgroup width="17%"></colgroup>
                <colgroup width="10%"></colgroup>
                <colgroup width="10%"></colgroup>
                <colgroup width="20%"></colgroup>                
                <colgroup width="10%"></colgroup>
                <colgroup width="10%"></colgroup>
                <colgroup width="10%"></colgroup>
                <thead>
                    <tr>
                        <th>
                            <label class="control control--checkbox">
                                <input type="checkbox" id="selectall" class="chkall rowchkbox">
                                <span class="control__indicator"></span>
                            </label>								
                        </th>
                       <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Address</th>                       
                        <th>Subscription</th>
                        <th>Billing</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($users as $item): ?>
                    <tr id="<?= $item->id; ?>">
                        <td>
                            <label class="control control--checkbox">
                                <input type="checkbox" class="readchk rowchkbox" name="spid" value="<?= $this->Number->format($item->id) ?>">
                                <span class="control__indicator"></span>
                            </label>
                        </td>
                        <td class="tfname"><div class="fname"><?= $item->fname ?></div></td>
                        <td class="tlname"><div class="lname"><?= $item->lname ?></div></td>
                        <td class="temail"><div class="email"><?= $item->email ?></div></td>
                        <td class="tusername"><div class="username"><?= $item->username ?></div></td>
                        <td class="tprimary_phone"><div class="phone"><?= (count($item->consumer_billing_details) >0 )?$item->consumer_billing_details[0]->primary_phone:''; ?></div></td>
                        <td class="taddress1"><div class="address">
                        <?php 
                        if(count($item->consumer_billing_details)):
                            echo $item->consumer_billing_details[0]->address1;
                            echo (!empty($item->consumer_billing_details[0]->city))?','.$item->consumer_billing_details[0]->city:'';
                            echo (!empty($item->consumer_billing_details[0]->state))?','.$item->consumer_billing_details[0]->state->name:'';
                            echo (!empty($item->consumer_billing_details[0]->zip_code))?','.$item->consumer_billing_details[0]->zip_code:'';
                        endif;
                        ?>
                        </div></td>
                        <td class="tsubscription"><div class="subscription"><?= isset($item->user_subscription_plan->subscription_plan->name)?$item->user_subscription_plan->subscription_plan->name:'' ?></div></td>
                        <td>
                            <div class="billing">
                                <!--span>Billing</span-->
                                <?php if(!empty($item->stripe_customer_id) && !empty($item->stripe_card_id)): ?>
                                <span><a href="<?php echo $this->Url->build(['controller'=>'Users','action'=>'consumerBilling',$item->id],true); ?>" class="edit billing-info" >Edit</a></span>
                                <?php else: ?>
                                <span class="invactive"><a href="javascript:void(0);" title="Edit" class="edit disabled">Edit</a></span>
                                <?php endif; ?>
                            </div>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>            
            <?= $this->Form->end() ?> 
            <?php echo $this->element('Admin/pagination'); ?>
        </div><!-- recordsLists -->
    </div><!-- types_records -->
</section><!-- providers patient_users -->

<?= $this->element('Admin/modal',[],['cache'=>true]) ?>
<?= $this->Html->script(['/assets/js/editLive'],['block'=>'bottomScript']) ?>
<?php $this->Html->scriptStart(['block' => true]); ?>    
    $(document).ready(function(){
        $(".billing-info").frameModal({"title":"Add Credit Card","dialogClass":"card_modal"});
        $(".frmBtn").frameModal();
        $(".removeBtn").deleteRows();
        selectAll();
        $("#reset-password").resetPassword();
    });
<?php $this->Html->scriptEnd(); ?>