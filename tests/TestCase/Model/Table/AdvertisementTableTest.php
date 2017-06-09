<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\AdvertisementTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\AdvertisementTable Test Case
 */
class AdvertisementTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\AdvertisementTable
     */
    public $Advertisement;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.advertisement',
        'app.provider_types',
        'app.specialities',
        'app.provider_profiles',
        'app.users',
        'app.groups',
        'app.user_types',
        'app.provider_availabilities',
        'app.user_logs',
        'app.provider_settings',
        'app.consumer_profiles',
        'app.user_subscription_plans',
        'app.subscription_plans',
        'app.coupons',
        'app.coupons_products',
        'app.products',
        'app.courses',
        'app.age_groups',
        'app.coupons_specialities',
        'app.coupon_products',
        'app.consumer_billing_details',
        'app.states',
        'app.insurance_plans',
        'app.insurance_plan_types',
        'app.provider_license_and_insurances',
        'app.trading_partners',
        'app.provider_strike',
        'app.provider',
        'app.consultations',
        'app.patients',
        'app.patient_parents',
        'app.patient_authorization_forms',
        'app.gaurantor_informations',
        'app.patient_medical_histories',
        'app.issues',
        'app.issue_types',
        'app.forms',
        'app.forms_issue_types',
        'app.patient_insurances',
        'app.consumer',
        'app.inquiry_types',
        'app.inquiries',
        'app.consultation_providers',
        'app.forums',
        'app.comments'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Advertisement') ? [] : ['className' => 'App\Model\Table\AdvertisementTable'];
        $this->Advertisement = TableRegistry::get('Advertisement', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Advertisement);

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
