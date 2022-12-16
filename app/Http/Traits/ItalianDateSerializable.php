<?php
namespace App\Http\Traits;

use Carbon\Carbon;
use DateTimeInterface;

trait ItalianDateSerializable
{
    protected function serializeDate(DateTimeInterface $date): bool|int
    {
        return $date->getTimestamp();
    }
}
?>
