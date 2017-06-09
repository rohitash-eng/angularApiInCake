<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ForumsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ForumsTable Test Case
 */
class ForumsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ForumsTable
     */
    public $Forums;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.forums',
        'app.provider_types',
        'app.specialities',
        'app.provider_profiles',
        'app.users',
        'app.groups',
        'app.user_types',
        'app.user_logs',
        'app.user_subscription_plans',
        'app.subscription_plans',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
        'app.consumer_billing_details',
        'app.provider_license_and_insurances',
        'app.states',
        'app.insurance_plans',
        'app.insurance_plan_types',
        'app.trading_partners',
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
        $config = TableRegistry::exists('Forums') ? [] : ['className' => 'App\Model\Table\ForumsTable'];
        $this->Forums = TableRegistry::get('Forums', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Forums);

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
