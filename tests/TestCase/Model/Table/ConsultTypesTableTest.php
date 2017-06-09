<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ConsultTypesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ConsultTypesTable Test Case
 */
class ConsultTypesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ConsultTypesTable
     */
    public $ConsultTypes;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.consult_types',
        'app.forms_categories_inquiries',
        'app.forms',
        'app.users',
        'app.groups',
        'app.user_types',
        'app.provider_availabilities',
        'app.user_logs',
        'app.provider_profiles',
        'app.states',
        'app.insurance_plans',
        'app.insurance_plan_types',
        'app.provider_license_and_insurances',
        'app.trading_partners',
        'app.patient_insurances',
        'app.patients',
        'app.provider',
        'app.provider_settings',
        'app.consumer_profiles',
        'app.user_subscription_plans',
        'app.subscription_plans',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
        'app.products',
        'app.specialities',
        'app.provider_types',
        'app.forums',
        'app.age_groups',
        'app.comments',
        'app.coupons_specialities',
        'app.consumer_billing_details',
        'app.provider_strike',
        'app.consultations',
        'app.consumer',
        'app.inquiry_types',
        'app.inquiries',
        'app.patient_authorization_forms',
        'app.patient_parents',
        'app.gaurantor_informations',
        'app.patient_medical_histories',
        'app.issues',
        'app.issue_types',
        'app.forms_issue_types'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('ConsultTypes') ? [] : ['className' => 'App\Model\Table\ConsultTypesTable'];
        $this->ConsultTypes = TableRegistry::get('ConsultTypes', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ConsultTypes);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
