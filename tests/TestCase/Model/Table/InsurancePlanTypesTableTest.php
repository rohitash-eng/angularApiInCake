<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\InsurancePlanTypesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\InsurancePlanTypesTable Test Case
 */
class InsurancePlanTypesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\InsurancePlanTypesTable
     */
    public $InsurancePlanTypes;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.insurance_plan_types'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('InsurancePlanTypes') ? [] : ['className' => 'App\Model\Table\InsurancePlanTypesTable'];
        $this->InsurancePlanTypes = TableRegistry::get('InsurancePlanTypes', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->InsurancePlanTypes);

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
