<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\UsersProviderTypesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\UsersProviderTypesTable Test Case
 */
class UsersProviderTypesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\UsersProviderTypesTable
     */
    public $UsersProviderTypes;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.users_provider_types',
        'app.users',
        'app.groups',
        'app.user_types',
        'app.user_logs',
        'app.provider_profiles',
        'app.states',
        'app.insurance_plans',
        'app.insurance_plan_types',
        'app.provider_license_and_insurances',
        'app.trading_partners',
        'app.patient_insurances',
        'app.patients',
        'app.patient_parents',
        'app.patient_authorization_forms',
        'app.gaurantor_informations',
        'app.patient_medical_histories',
        'app.issues',
        'app.issue_types',
        'app.forms',
        'app.provider_types',
        'app.specialities',
        'app.forums',
        'app.comments',
        'app.consultations',
        'app.consumer',
        'app.provider_settings',
        'app.consumer_profiles',
        'app.user_subscription_plans',
        'app.subscription_plans',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
        'app.consumer_billing_details',
        'app.provider',
        'app.inquiry_types',
        'app.inquiries'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('UsersProviderTypes') ? [] : ['className' => 'App\Model\Table\UsersProviderTypesTable'];
        $this->UsersProviderTypes = TableRegistry::get('UsersProviderTypes', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->UsersProviderTypes);

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
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}