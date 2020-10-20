import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { IMail, IMessage } from './IMail';

class MailProvider implements IMail {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '82de2e00d19ea4',
        pass: '5a1789009112f6',
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: 'Hollytel',
        address: 'equipe@hollytel.com',
      },
      subject: message.subject,
      html: message.body,
    });
  }
}

export default MailProvider;
