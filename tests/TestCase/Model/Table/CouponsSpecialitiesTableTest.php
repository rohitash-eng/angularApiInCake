<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\CouponsSpecialitiesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\CouponsSpecialitiesTable Test Case
 */
class CouponsSpecialitiesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\CouponsSpecialitiesTable
     */
    public $CouponsSpecialities;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.coupons_specialities',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
        'app.subscription_plans',
        'app.products',
        'app.specialities',
        'app.provider_types',
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
        'app.provider_settings',
        'app.consumer_profiles',
        'app.user_subscription_plans',
        'app.consumer_billing_details'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('CouponsSpecialities') ? [] : ['className' => 'App\Model\Table\CouponsSpecialitiesTable'];
        $this->CouponsSpecialities = TableRegistry::get('CouponsSpecialities', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->CouponsSpecialities);

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
