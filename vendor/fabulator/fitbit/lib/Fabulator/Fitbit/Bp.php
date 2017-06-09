<?php
namespace Fabulator\Fitbit;

use Fabulator\Fitbit\Module;

use \Datetime;

class Bp extends Module
{

    /**
     * Get sleep log https://dev.fitbit.com/docs/sleep/#get-sleep-logs
     * @param  Datetime $date for date
     * @return object         fitbit response
     */
    public function get(Datetime $date)
    {
        return $this->fitbit->get('bp/date/' . $date->format('Y-m-d'));
    }

    /**
     * Log sleep https://dev.fitbit.com/docs/sleep/#log-sleep
     * @param  Datetime $start    start of sleep
     * @param  int      $duration duration in miliseconds
     * @return object             Fitbit response
     */
    public function log(Datetime $start, $duration)
    {
        return $this->fitbit->post('bp', [
                'startTime' => $start->format('H:i'),
                'duration' => $duration,
                'date' => $start->format('Y-m-d')
            ]);
    }

    /**
     * Delete sleep log https://dev.fitbit.com/docs/sleep/#delete-sleep-log
     * @param  integer $id  id of log
     * @return object       Fitbit response
     */
    public function delete($id)
    {
        return $this->fitbit->delete('bp/' . $id);
    }
}
