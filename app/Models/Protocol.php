<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Protocol extends Model
{
    use HasFactory;

    protected function remainingDays(): Attribute
    {
        $days=Carbon::parse(Carbon::now())->diffInDays($this->expire_date,false);
        return Attribute::make(
            get: fn ($value,$attributes) => max($days, 0),
        );
    }

    public function protocolLots(): HasMany
    {
        return $this->hasMany(ProtocolLot::class);
    }

    public function lots(): BelongsToMany
    {
        return $this->belongsToMany(Lot::class,'protocol_lots','protocol_id','lot_id')->withPivot(['price','original_price'])->as('protocol_lot');
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    protected $appends=['remaining_days'];
}
