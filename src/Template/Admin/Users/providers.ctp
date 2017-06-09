<?php
$this->assign('title','Manage Consumers');
?>
<section class="patient_users">
    <h1 class="heading">Users</h1>
   <div class="types_records groups">
        <div class="actions">            
            <div class="edit">
            <a type="button" href="<?= $this->Url->build(['controller'=>'Users','action'=>'addProvider'],'true') ?>" id="addFrmBtn" class="btn addNewRecord frmBtn" title="Add">Add</a>            
        </div>
        <div class="edit">
            <a type="button" href="<?= $this->Url->build(['controller'=>'Users','action'=>'addProvider'],'true') ?>" id="editFrmBtn" class="btn edit_record frmBtn" title="Edit">Edit</a>            
        </div>
        <div class="add">
            <a type="button" href="<?= $this->Url->build(['controller'=>'Users','action'=>'resetPassword'],'true') ?>" id="reset-password" class="btn " title="Password Reset">Password Reset</a>
        </div>    
        <div class="remove">
            <a href="javascript:void(0)" type="button" class="btn btn-danger remove_record removeBtn" title="Remove">Remove</a>
        </div>	
        </div><!-- actions -->       
        <div class="records-lists ajax-response">
            <?php if(!count($users)): ?>  
            <div class="noRecordsFound">
                <h3>No Records Found</h3>
            </div><!-- noRecordsFound -->
            <?php else: ?> 
           <?= $this->Form->create('null', ['id' => 'liveForm','url'=>['controller'=>'Users','action'=>'index']]) ?>
            <div class="table-responsive">
            <table class="table table-boradered" id="listTable">
                <colgroup width="3%"></colgroup>
                <colgroup width="10%"></colgroup>
                <colgroup width="10%"></colgroup>
                <colgroup width="14%"></colgroup>
                <colgroup width="14%"></colgroup>
                <colgroup width="10%"></colgroup>
                <colgroup width="23%"></colgroup>
                <colgroup width="3%"></colgroup>
                <colgroup width="8%"></colgroup>
                <colgroup width="5%"></colgroup>
                <thead>
                    <tr>
                        <th>
                            <label class="control control--checkbox">
                                <input type="checkbox" id="selectall" class="chkall rowchkbox">
                                <span class="control__indicator"></span>
                            </label>								
                        </th>
                        <th><span class="sorting"><?= $this->Paginator->sort('Users.fname',__('Name')) ?></span></th>
                        <th>Last Name</th>
                        <th><span class="sorting"><?= $this->Paginator->sort('Specialities.title',__('Silo Type')) ?></span></th>
                        <th><span class="sorting"><?= $this->Paginator->sort('ProviderTypes.title',__('Provider Type')) ?></span></th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Strikes</th>
                        <th>Ocurrence</th>
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
                        <td class="temail"><div class="email"><?= (!empty($item->provider_profile->speciality->title))?$item->provider_profile->speciality->title:'' ?></div></td>
                        <td class="temail"><div class="email"><?= (!empty($item->provider_profile->provider_type->title))?$item->provider_profile->provider_type->title:'' ?></div></td>
                        <td class="thome_phone"><div class="phone"><?= (!empty($item->provider_profile->home_phone))?$item->provider_profile->home_phone:''; ?></div></td>
                        <td class="taddress1"><div class="email">
                        <?php
                        echo (!empty($item->provider_profile->address1))?$item->provider_profile->address1:''; 
                        echo (!empty($item->provider_profile->city))?', '.$item->provider_profile->city:''; 
                        echo (!empty($item->provider_profile->state->name))?', '.$item->provider_profile->state->name:''; 
                        echo (!empty($item->provider_profile->zip))?', '.$item->provider_profile->zip:''; 
                        ?></div></td>                        
                        <td class="tstrike"><div class="strike"><?= count($item->provider_strike) ?></div></td>
                        <td class="tOcurrence"><div class="Ocurrence">
                        <?php
                        if(!empty($item->provider_strike))
                            echo (new DateTime($item->provider_strike[0]->created))->format('m/d/Y');
                        ?></div></td>
                        <td>
                            <div class="billing">
                                <!--span>Billing</span-->
                                <?php if(!empty($item->provider_payment->id)): ?>
                                <span><a href="<?php echo $this->Url->build(['controller'=>'Users','action'=>'providerBilling',$item->provider_payment->id],true); ?>" class="edit billing-info" title="Edit Billing" >Edit</a></span>
                                <?php else: ?>
                                <span class="invactive"><a href="javascript:void(0);" title="Edit" class="edit disabled">Edit</a></span>
                                <?php endif; ?>
                            </div>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>     
            </div>
            <?= $this->Form->end() ?> 
            <?php endif; ?>
            <?php echo $this->element('Admin/pagination'); ?>
        </div><!-- recordsLists -->
    </div><!-- types_records -->
</section><!-- providers patient_users -->

<?= $this->element('Admin/modal',[],['cache'=>true]) ?>
<?= $this->Html->script(['/assets/js/editLive'],['block'=>'bottomScript']) ?>
<?php $this->Html->scriptStart(['block' => true]); ?>    
    $(document).ready(function(){
        $(".billing-info").frameModal({"title":"Update Billing Details","dialogClass":"card_modal"});
        $(".frmBtn").frameModal();
        $(".removeBtn").deleteRows();
        selectAll();
        $("#reset-password").resetPassword();
    });
<?php $this->Html->scriptEnd(); ?>