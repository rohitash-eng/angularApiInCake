<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ConsumerProfilesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ConsumerProfilesTable Test Case
 */
class ConsumerProfilesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ConsumerProfilesTable
     */
    public $ConsumerProfiles;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.consumer_profiles'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('ConsumerProfiles') ? [] : ['className' => 'App\Model\Table\ConsumerProfilesTable'];
        $this->ConsumerProfiles = TableRegistry::get('ConsumerProfiles', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ConsumerProfiles);

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
