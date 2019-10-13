<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class TestMail extends Mailable
{
    use Queueable, SerializesModels;
    public $name = 'Daniel Ochoa';
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->name='Daniel Ochoa';
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $address = 'ochoad24@gmail.com';
        $name = 'Sistema';
        $subject = 'Recuperacion Contraseña';
        return $this->view('mails.mail')
            ->from($address, $name)
            ->cc($address, $name)
            ->bcc($address, $name)
            ->replyTo($address, $name)
            ->subject($subject)
            ->with([
            'CustomOption' => 'CustomValue',
            'CustomOption' => 'CustomValue'
            ]);
    }
}
