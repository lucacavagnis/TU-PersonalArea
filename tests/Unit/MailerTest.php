<?php
namespace Tests\Unit;
use PHPUnit\Framework\TestCase;
use App\Mail\OrderReceived;
use Illuminate\Support\Facades\Mail;
class MailerTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testSending()
    {
        Mail::fake();
        Mail::send(new OrderReceived());
        Mail::assertSent(OrderReceived::class);
    }
}
