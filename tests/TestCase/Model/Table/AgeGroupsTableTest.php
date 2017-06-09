<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\AgeGroupsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\AgeGroupsTable Test Case
 */
class AgeGroupsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\AgeGroupsTable
     */
    public $AgeGroups;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.age_groups'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('AgeGroups') ? [] : ['className' => 'App\Model\Table\AgeGroupsTable'];
        $this->AgeGroups = TableRegistry::get('AgeGroups', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->AgeGroups);

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
