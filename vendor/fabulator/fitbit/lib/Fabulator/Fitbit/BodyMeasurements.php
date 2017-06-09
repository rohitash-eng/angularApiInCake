<?php
namespace Fabulator\Fitbit;

use Fabulator\Fitbit\Module;

use \Datetime;

class BodyMeasurements extends Module
{
    /**
     * Get body time series https://dev.fitbit.com/docs/body/#body-time-series
     * @param  string   $resource can be bmi, dat and weight
     * @param  Datetime $from     from date
     * @param  Datetime $to       to date
     * @return object             response from Fitbit
     */
    public function get(Datetime $date)
    {
        return $this->fitbit->get('body/date/' . $date->format('Y-m-d'));
    }
}
