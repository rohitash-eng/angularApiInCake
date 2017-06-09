<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\FaqsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\FaqsTable Test Case
 */
class FaqsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\FaqsTable
     */
    public $Faqs;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.faqs',
        'app.pages',
        'app.categories',
        'app.aboutus_groups'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Faqs') ? [] : ['className' => 'App\Model\Table\FaqsTable'];
        $this->Faqs = TableRegistry::get('Faqs', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Faqs);

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
