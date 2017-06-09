<?php

/**
 * Description of SluggableBehavior
 *
 * @author Mr Subhash
 */

namespace App\Model\Behavior;

use Cake\Datasource\EntityInterface;
use Cake\Event\Event;
use Cake\ORM\Behavior;
use Cake\ORM\Entity;
use Cake\ORM\Query;
use Cake\Utility\Inflector;

class SluggableBehavior extends Behavior {

    public function initialize(array $config) {
        parent::initialize($config);
    }

    protected $_defaultConfig = [
        'field' => 'title',
        'slug' => 'slug',
        'replacement' => '-',
    ];

    public function slug(Entity $entity) {
        $config = $this->config();
        $value = $entity->get($config['field']);
        $entity->set($config['slug'], Inflector::slug(strtolower($value), $config['replacement']));
    }

    public function beforeSave(Event $event, EntityInterface $entity) {
        $this->slug($entity);
    }

    public function findSlug(Query $query, array $options) {
        return $query->where(['slug' => $options['slug']]);
    }

}
