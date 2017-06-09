<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\AboutusGroupsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\AboutusGroupsTable Test Case
 */
class AboutusGroupsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\AboutusGroupsTable
     */
    public $AboutusGroups;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.aboutus_groups',
        'app.pages'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('AboutusGroups') ? [] : ['className' => 'App\Model\Table\AboutusGroupsTable'];
        $this->AboutusGroups = TableRegistry::get('AboutusGroups', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->AboutusGroups);

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
