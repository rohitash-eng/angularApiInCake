<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\WebinarsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\WebinarsTable Test Case
 */
class WebinarsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\WebinarsTable
     */
    public $Webinars;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.webinars'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Webinars') ? [] : ['className' => 'App\Model\Table\WebinarsTable'];
        $this->Webinars = TableRegistry::get('Webinars', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Webinars);

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
