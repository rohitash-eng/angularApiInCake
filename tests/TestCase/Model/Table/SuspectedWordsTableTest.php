<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\SuspectedWordsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\SuspectedWordsTable Test Case
 */
class SuspectedWordsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\SuspectedWordsTable
     */
    public $SuspectedWords;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.suspected_words'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('SuspectedWords') ? [] : ['className' => 'App\Model\Table\SuspectedWordsTable'];
        $this->SuspectedWords = TableRegistry::get('SuspectedWords', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->SuspectedWords);

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
