<?php

namespace App\Model\Entity;

use Cake\ORM\Entity;
use Cake\Auth\DefaultPasswordHasher;
use Cake\ORM\TableRegistry;

/**
 * User Entity
 *
 * @property int $id
 * @property int $user_type_id
 * @property string $fname
 * @property string $lname
 * @property string $email
 * @property string $username
 * @property string $password
 * @property string $newsletter_subsciption_status
 * @property int $speciality_id
 * @property string $photo
 * @property string $ssn_no
 * @property \Cake\I18n\Time $created
 * @property \Cake\I18n\Time $modified
 *
 * @property \App\Model\Entity\UserType $user_type
 * @property \App\Model\Entity\Speciality $speciality
 */
class User extends Entity {

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        '*' => true,
        'id' => true,
        'provider_profile' => true,
        'state_license_and_insurances' => true,
    ];

    /**
     * Fields that are excluded from JSON versions of the entity.
     *
     * @var array
     */
    protected $_hidden = [
        'password'
    ];

    protected function _setPassword($password) {
        if (strlen($password) > 0) {
            return (new DefaultPasswordHasher)->hash($password);
        }
    }

    protected function _setDob($dob) {
        return $this->getFormattedDate($dob);
    }

    protected function _setFname($fname) {
        return trim($fname);
    }

    protected function _setLname($lname) {
        return trim($lname);
    }

    protected function _setEmail($email) {
        return trim($email);
    }

    public function parentNode() {
        if (!$this->id) {
            return null;
        }
        if (isset($this->group_id)) {
            $groupId = $this->group_id;
        } else {
            $Users = TableRegistry::get('Users');
            $user = $Users->find('all', ['fields' => ['group_id']])->where(['id' => $this->id])->first();
            $groupId = $user->group_id;
        }
        if (!$groupId) {
            return null;
        }
        return ['Groups' => ['id' => $groupId]];
    }
    
    private function getFormattedDate($date) {
        $resultDate = \DateTime::createFromFormat('m/d/Y', $date);
        return $resultDate->format('Y-m-d');
    }
    
    protected function _getFullName() {
        return $this->_properties['title'].' '.$this->_properties['fname'].' '.$this->_properties['mname'] . '  ' .$this->_properties['lname'];
    }

}
