<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ProviderStrikeTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ProviderStrikeTable Test Case
 */
class ProviderStrikeTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ProviderStrikeTable
     */
    public $ProviderStrike;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.provider_strike',
        'app.providers',
        'app.consultations',
        'app.patients',
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
        'app.provider_types',
        'app.specialities',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
        'app.subscription_plans',
        'app.products',
        'app.coupons_specialities',
        'app.forums',
        'app.comments',
        'app.provider_settings',
        'app.consumer_profiles',
        'app.user_subscription_plans',
        'app.consumer_billing_details',
        'app.patient_parents',
        'app.patient_authorization_forms',
        'app.gaurantor_informations',
        'app.patient_medical_histories',
        'app.issues',
        'app.issue_types',
        'app.forms',
        'app.forms_issue_types',
        'app.consumer',
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
        $config = TableRegistry::exists('ProviderStrike') ? [] : ['className' => 'App\Model\Table\ProviderStrikeTable'];
        $this->ProviderStrike = TableRegistry::get('ProviderStrike', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ProviderStrike);

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
