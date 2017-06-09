<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\CouponsSubsciptionPlansTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\CouponsSubsciptionPlansTable Test Case
 */
class CouponsSubsciptionPlansTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\CouponsSubsciptionPlansTable
     */
    public $CouponsSubsciptionPlans;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.coupons_subsciption_plans',
        'app.coupons',
        'app.subscription_plans'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('CouponsSubsciptionPlans') ? [] : ['className' => 'App\Model\Table\CouponsSubsciptionPlansTable'];
        $this->CouponsSubsciptionPlans = TableRegistry::get('CouponsSubsciptionPlans', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->CouponsSubsciptionPlans);

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
