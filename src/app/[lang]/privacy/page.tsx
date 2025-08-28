import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { use } from 'react';

export default function Privacy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);

  return (
    <>
      <Navbar lang={lang} />
      <main className="min-h-screen pt-32 pb-20 px-6 md:px-12">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mb-12">
            Last updated: July 1, 2023
          </p>
          
          <div className="prose max-w-4xl">
            <p>By joining, interacting or tax-free shopping with the Travel Money Application, we will collect and use information about you.</p>
            
            <p>Travel Money SAS (&quot;Travel Money&quot;) and its application (the &quot;Application&quot;) allows its users to benefit from the exemption of the payment of the value added tax (&quot;VAT&quot;) in relation to goods purchased in participating countries (the &quot;Tax Exemption&quot;). To that end, the Application will carry out all administrative formalities, so that users can obtain the refund of the VAT in relation to the goods purchased in the participating countries (the &quot;Services&quot;). The Services we provide users are completely dematerialized and all interactions between users and Travel Money will be achieved through the Application, website, email or customer service representatives. Consequently, if you want to benefit from our Services, you will have to download and install our Application and register to it by creating an account.</p>
            
            <p>By choosing to download, install, register, access or otherwise use our Application, you hereby understand and acknowledge that Travel Money will collect, process and store personal data relating to the user (the &quot;Personal Data&quot;) in accordance with the conditions described below.</p>
            
            <p>Note that you can find and print this Privacy Policy at any time at the following link: travelmoney.app/en/privacy-policy</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Controller of your personal data</h2>
            <p>The company Travel Money Inc. (&quot;we&quot;, &quot;us&quot; or &quot;Travel Money&quot;) is the data controller of the processing of your Personal Data as carried out to operate the Application and/or to provide you with the Services. You will find the contact details of Travel Money in the Legal Notice.</p>
            
            <p>Travel Money commits and ensure that your Personal Data are processed in accordance with the EU General Data Protection Regulation 2016/679 of 27 April 2016 (the «GDPR») and the French Act No. 78-17 of 6 January 1978 on data processing, data files and individual liberties (the &quot;French Data Protection Act&quot;), as amended, and any other applicable data protection laws (together, the &quot;Data Protection Laws&quot;).</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Types of personal data we collect when you use our application and services</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">2.1 Information collected by us when you register to our Application</h3>
            <p>When you register to our Application, you are required to provide us with information in order to access our Services.</p>
            
            <p>In this context, Travel Money may collect Personal Data directly from you including:</p>
            
            <ul className="list-disc pl-6 my-4">
              <li>Contact information*: first name, last name, postal address, phone number, email address, birth date, social media display name and webchat display name;</li>
              <li>Payment information*: bank details (IBAN, etc.), electronic wallet identifier. Credit card information, if collected, will be collected by Travel Money partners and Travel Money will not collect or process them and will not be the controller of such data processing. Note that you are free to choose the method of payment which will be used by Travel Money to refund you the VAT.</li>
              <li>The duration of Your stay in the EU*.</li>
              <li>Identification document(s)*: copy of your passport, ID, etc.</li>
              <li>Data related to use of the third party identity verification service</li>
              <li>Images of your identity documents and information they contain, including unique identification numbers.</li>
              <li>Reports with the status and result of your identity verification check including biometric (facial identity) checks.</li>
              <li>The photo of yourself that you submit for identity verification purposes.</li>
              <li>Information relating to your account in the Application*: user name, password, security questions, etc.</li>
              <li>The real time location of the mobile device if you allow it;</li>
            </ul>
            
            <p>*Note that if you do not provide us with the mandatory information identified by an asterisk in the registration form and hereinabove, we will not be able to grant you access to our Application nor provide you with the Services. This is because we must collect these pieces of information to deliver the Services properly and to comply with legal obligations to which we are subject.</p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">2.2 Information collected when you use our Services</h3>
            <p>When we provide you the Services, we will interact with you, exchange information and carry out formalities for you.</p>
            
            <p>In this context, we may notably collect the following information:</p>
            
            <ul className="list-disc pl-6 my-4">
              <li>Transaction information*: amount, date, hour, etc. in relation to a transaction (e.g., refund of VAT).</li>
              <li>Information relating to the purchase you carried out*: goods purchased, price, location of the retail store, date and hour of the purchase, invoice, signature, Export Sales Form.</li>
              <li>Your device location if using our chat tool for the Customer services as provided in the chat&apos;s Fair Privacy Notice.</li>
              <li>Any other information that you decide to provide us in the course of our contractual relationship (e.g.,when you contact our Customer Service and provide some personal information).</li>
            </ul>
            
            <p>*Note that if you do not provide us with the mandatory information identified by an asterisk hereinabove, we will not be able to provide you with the Services. This is because we must collect these pieces of information to deliver the Services properly and to comply with legal obligations to which we are subject.</p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">2.3 Information collected when you use our Application</h3>
            <p>Apart from the information we collect directly from you, we can also collect information relating to you when you use our Application to provide you with customized features or for security purposes.</p>
            
            <p>When you connect to our Application, we will collect technical information relating to your use of our Application such as the date and time of connection, log files, troubleshooting activities, performance reports, etc. We will also collect technical information relating to the device on which you use our Application such as information about your device type, device identifiers, crash reports, etc.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How do we collect personal data relating to you?</h2>
            <p>We collect Personal Data directly from you when you register your account on our Application, use our Application and, more generally, when the user and Travel Money exchange as part of our relationship in the context of the provision of the Services.</p>
            
            <p>We may disclose your information to our third party service providers, agents and subcontractors (Suppliers) for the purposes set out above. Our Suppliers can be categorized as follows:</p>
            
            <table className="min-w-full my-4 border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Recipient / relationship to us</th>
                  <th className="border border-gray-300 p-2">Industry sector (& sub-sector)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Advertising, PR, digital and creative agencies</td>
                  <td className="border border-gray-300 p-2">Media (Advertising & PR)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Banks, payment providers and other financial services providers</td>
                  <td className="border border-gray-300 p-2">Financial (Banking & Payment)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Cloud software system providers, including database, email distribution and document management providers</td>
                  <td className="border border-gray-300 p-2">IT (Cloud Services)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Customer service/help desk platform providers</td>
                  <td className="border border-gray-300 p-2">IT (Customer Services)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Facilities and technology service providers including scanning and data destruction providers, receipt verification and document processing service providers and other back office administration service providers</td>
                  <td className="border border-gray-300 p-2">IT (Data Services)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Identity verification service providers</td>
                  <td className="border border-gray-300 p-2">IT (Identity Verification)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Insurers and insurance brokers</td>
                  <td className="border border-gray-300 p-2">Insurance (Underwriting & Broking)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Legal, security and other professional advisers and consultants</td>
                  <td className="border border-gray-300 p-2">Professional Services (Legal & Accounting)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Market and customer research providers</td>
                  <td className="border border-gray-300 p-2">Media (Market Research)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Social media platforms</td>
                  <td className="border border-gray-300 p-2">Media (Social Media)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Website and data analytics platform providers</td>
                  <td className="border border-gray-300 p-2">IT (Data Analytics)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Website and app developers</td>
                  <td className="border border-gray-300 p-2">IT (Software Development)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Website hosting services providers</td>
                  <td className="border border-gray-300 p-2">IT (Hosting)</td>
                </tr>
              </tbody>
            </table>
            
            <p>When sending your information to Suppliers, Travel Money only discloses to them any personal information that is necessary for them to provide their service and we have a contract in place that requires them to keep your information secure.</p>
            
            <p>When we share your personal information with any Suppliers or other third parties that are controllers of that information, they may disclose or transfer it to other organizations in accordance with their data protection policies. This does not affect any of your data subject rights, as detailed below.</p>
            
            <p>We may disclose your personal information to other third parties as follows:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Any third party who is restructuring, selling or acquiring some or all of our business or assets or otherwise in the event of a merger, re-organisation or similar event; and</li>
              <li>If we are under a duty to disclose or share your information in order to comply with any legal or regulatory obligation or request, including by the police, tribunals, regulators, the government or related agencies.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Purposes and legal basis for the processing</h2>
            <p>We use your Personal Data to:</p>
            
            <ul className="list-disc pl-6 my-4">
              <li>Communicate with you and answer any request you may have;</li>
              <li>Enter into contractual relationship with you;</li>
              <li>Perform our contractual obligations to you;</li>
              <li>Register your account on the Application</li>
              <li>Allow you to use and access the Application;</li>
              <li>Operate and provide the Application;</li>
              <li>Provide you with our Services, including but not limited to, carry out all formalities required to benefit from the Tax refund, including interacting with the Customs Administration, process yor VAT refund form and transfer payments due to you;</li>
              <li>Run promotional campaigns and competitions that you enter from time to time and to distribute prizes; and</li>
              <li>Improve our Services by identifying technical issues in the functioning of the Application, resolving troubleshooting issues, measuring performance, etc.</li>
            </ul>
            
            <p>The processing of your Personal Data is necessary for Travel Money to:</p>
            
            <ul className="list-disc pl-6 my-4">
              <li>Take steps prior to entering into contractual relationships with you;</li>
              <li>Perform our contractual obligations pursuant to the contractual terms entered into between you and us under the Agreement and Terms and Conditions / Terms of Use;</li>
              <li>Comply with legal obligations to which we are subject, including but not limited to, in our capacity as seller involved in the Tax Exemption process, such as:
                <ul className="list-disc pl-6 my-2">
                  <li>Keep a record relating to the exercise of any of your rights relating to our processing of your personal information;</li>
                  <li>To comply with a request from you in connection with the exercise of your rights (for example where you have asked us not to contact you for marketing purposes, we will keep a record of this on our suppression lists in order to be able to comply with your request);</li>
                  <li>To anonymise or delete your personal information when it is no longer required for the purposes described in this Privacy Policy;</li>
                  <li>To comply with court orders or other notices where failure to do so would result in us breaking the law;</li>
                  <li>To handle and resolve any complaints we receive relating to our processing of your personal information as described in this Privacy Policy; and</li>
                  <li>To notify you of changes to this Privacy Policy and our Terms and Conditions.</li>
                </ul>
              </li>
              <li>Contact you via email with marketing information about us, our events and products and services and about our third party partners</li>
              <li>Refresh your marketing preferences when you respond to a request from us to do so; and</li>
              <li>Pursue our legitimate interest; for example, it is our legitimate interest to:
                <ul className="list-disc pl-6 my-2">
                  <li>Protect your account from any security threats and keep your account safe and secure;</li>
                  <li>Improve our Application and Services;</li>
                  <li>Provide you with information about our services and offers; and</li>
                  <li>Respond to foreign law enforcement requests.</li>
                </ul>
              </li>
            </ul>
            
            <p>When we process your Personal Data based on our legitimate interest, we always make sure that it is not overridden by your interests or fundamental rights and freedoms.</p>
            
            <p>Processing necessary for us to promote our business and measure the reach and effectiveness of our campaigns;</p>
            <p>For analysis and insight conducted to inform our marketing and business strategies, and to enhance your user experience;</p>
            <p>To be in contact and receive support via the Application, Website, Email or Customer Service Representative;</p>
            <p>To supply your details to social media and other online platforms operated by other companies, or to use information about you that they already hold, for them to contact you with our targeted advertising online, unless you object. You may receive advertising based on information about you that we have provided to the platform or because, at our request, the platform has identified you as having similar attributes to the individuals whose details it has received from us. To find out more, please refer to the information provided in the help pages of the platforms on which you receive advertising from us;</p>
            <p>Processing necessary for us to respond to changing market conditions and the needs of our users</p>
            <p>To analyze, evaluate and improve our Services so that your use of them are more useful and enjoyable (we will generally use data amalgamated from many people so that it does not identify you personally);</p>
            <p>To undertake market analysis and research (including contacting you with surveys) so that we can better understand your use of our Services or your opinion of us or our business;</p>
            
            <p>Processing necessary for us to operate the administrative and technical aspects of our business efficiently and effectively</p>
            <p>To administer our Services and for internal operations, including troubleshooting, testing, statistical purposes;</p>
            <p>To verify your identity and location and take other measures for the prevention of fraud and other criminal activities (and to share your personal information with our identity verification services provider for these reasons);</p>
            <p>For network and information security in order for us to take steps to protect your information against loss or damage, theft or unauthorized access;</p>
            <p>For the purposes of corporate restructure or reorganization or sale of our business or assets;</p>
            <p>For efficiency, accuracy or other improvements of our databases and systems, for example, by combining systems or consolidating records we hold about you;</p>
            <p>To enforce or protect our contractual or other legal rights or to bring or defend legal proceedings; and</p>
            <p>For other general administration including managing any reports you make, your queries, complaints, or claims, and to send service messages to you.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Recipients</h2>
            <p>The Personal Data collected through the Application or while providing the Services are processed by Travel Money. They may be transmitted and processed by Travel Money&apos;s subsidiaries or affiliates when necessary for the provision of the Services.</p>
            
            <p>In order to provide you with our Services, we will also have to communicate your Personal Data to the Customs authorities, Tax authorities, and any other authority or administrative body as strictly necessary to provide you with the Services for each participating member country where the goods were purchased.</p>
            
            <p>If we are required to do so under applicable law, we may have to disclose your Personal Data in connection with law enforcement requests or legal or regulatory proceedings. Unless it is prohibited by applicable law, we will notify you of any request for disclosure of your Personal Data and we will give you the opportunity (whenever reasonable and possible, including from a legal standpoint) to seek appropriate protection measures or other remedies to challenge the request for disclosure or limit the scope of disclosure. When disclosing your Personal Data we will do our best reasonable efforts to obtain guarantees that your Personal Data will be kept confidential.</p>
            
            <p>We may also disclose your Personal Data to investigate or combat potential unlawful use of our Application or Services.</p>
            
            <p>Unless expressly stated under this Section, the Personal Data will otherwise not be transmitted to any third party without obtaining your prior express consent.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Transfer of personal data outside the european union</h2>
            <p>Your use of our Application and Services may involve the transfer of your Personal Data outside the European Union territory. We will always implement appropriate safeguards for such transfers in accordance with Data Protection Laws.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Security</h2>
            <p>When you use our Application, we take and implement technical and organizational security measures which we deem appropriate to protect your Personal Data against any unlawful or accidental destruction, loss, alteration, unauthorized disclosure of, or access to Personal Data and any other form of unlawful or unauthorized processing, pursuant to the requirements of the GDPR and the French Data Protection Act. We guarantee that we will do our best possible efforts to ensure that your Personal Data is maintained secure and confidential at all times, including by our employees or agents or subcontractors.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data retention</h2>
            <p>If we collect your personal information, the length of time for which we retain it is determined by several factors including the purpose(s) for which we use that information and our obligations under other laws. We do not retain personal information in an identifiable format for longer than is necessary.</p>
            
            <p>We may need your personal information to establish, bring or defend legal claims. For this purpose, we will always retain your personal information for a minimum of 7 years after the date it is no longer needed by us for any of the purposes listed under paragraph 4. In respect of your VAT refund forms and receipts, we retain these for 7 years from the date we make payment to you for your VAT refund. The only exceptions to this are where:</p>
            <ul className="list-disc pl-6 my-4">
              <li>We reject the receipts you submit or do not make payment to you for any other reason, in which case will retain your receipts (and, if applicable, VAT refund form) in an identifiable form for up to 10 years for fraud prevention purposes;</li>
              <li>The law requires us to hold your personal information for a longer period, or delete it sooner;</li>
              <li>You exercise your right to have the information erased (where it applies) and we do not need to hold it in connection with any of the reasons permitted or required under the law (see paragraph 9 (Your Rights) below); and</li>
              <li>You exercise your right to require us to retain your personal information for a period longer than our stated retention period (see paragraph 9 (Your Rights) below).</li>
            </ul>
            
            <p>We will keep your personal information for as long as we have a relationship with you and as long as necessary during our contractual relationship. Once our relationship with you has come to an end, we (and in some circumstances our retailers) will retain your personal information for a period of time that enables us to:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Maintain business records for analysis and/or audit purposes</li>
              <li>Comply with record retention requirements under the law</li>
              <li>Defend or bring any existing or potential legal claims</li>
              <li>Deal with any complaints regarding the services</li>
            </ul>
            
            <p>We will delete your personal information when it is no longer required for these purposes. If there is any information that we are unable, for technical reasons, to delete entirely from our systems, we will put in place appropriate measures to prevent any further processing or use of the data.</p>
            
            <p>Note however that laws or regulations applicable to us may require us to keep and preserve some information, including your Personal Data, for longer periods. In such a case, we will store your Personal Data in intermediary archiving and for a duration strictly necessary to comply with the legal obligations which we are subject to.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Your rights</h2>
            <p>You may have a number of rights in relation to your personal information under data protection law. In relation to certain rights, we may ask you for information to confirm your identity and, where applicable, to help us to search for your personal information. Except in rare cases, we will respond to you within 1 calendar month from either:</p>
            <ul className="list-disc pl-6 my-4">
              <li>The date that we have confirmed your identity; or</li>
              <li>Where we do not need to do this because we already have this information, from the date we received your request.</li>
            </ul>
            
            <p>You have the following rights, some of which may only apply in certain circumstances:</p>
            <div className="border border-gray-300 p-4 my-4 rounded">
              <p className="font-semibold">To have your information corrected if it is inaccurate and to have incomplete personal information completed:</p>
              <p>If you change your name or contact information, or you discover that any of the other information we hold is inaccurate or out of date, please let us know by contacting us in any of the details described at the end of this Privacy Policy.</p>
            </div>
            
            <div className="border border-gray-300 p-4 my-4 rounded">
              <p className="font-semibold">To object to processing of your personal information:</p>
              <p>Where we rely on our legitimate interests as the lawful basis for processing your personal information for particular purposes, you may object to us using your personal information for these purposes by emailing or writing to us at the address at the end of this Privacy Policy. Except for the purposes for which we are sure we can continue to process your personal information, we will temporarily stop processing your personal information in line with your objection until we have investigated the matter. If we agree that your objection is justified in accordance with your rights under data protection laws, we will permanently stop using your data for those purposes. Otherwise we will provide you with our justification as to why we need to continue using your personal information.</p>
            </div>
            
            <div className="border border-gray-300 p-4 my-4 rounded">
              <p className="font-semibold">To withdraw your consent to processing your personal information:</p>
              <p>Where we rely on your consent as the lawful basis for processing your personal information, you may withdraw your consent at any time by contacting us using the details at the end of this Privacy Policy. If you would like to withdraw your consent to receiving any direct marketing or cookies to which you previously opted-in, you can also do so using our unsubscribe tool. If you withdraw your consent, our use of your personal information before you withdraw is still lawful.</p>
            </div>
            
            <div className="border border-gray-300 p-4 my-4 rounded">
              <p className="font-semibold">To restrict processing of your personal information, you may ask us to restrict the processing of your personal information in the following situations:</p>
              <ul className="list-disc pl-6 my-2">
                <li>Where you believe it is unlawful for us to do so;</li>
                <li>You have objected to its use and our investigation is pending; or</li>
                <li>You require us to keep it in connection with legal proceedings.</li>
              </ul>
              <p>In these situations, we may only process your personal information whilst its processing is restricted if we have your consent or are legally permitted to do so, for example for storage purposes, to protect the rights of another individual or company or in connection with legal proceedings.</p>
            </div>
            
            <div className="border border-gray-300 p-4 my-4 rounded">
              <p className="font-semibold">To have your personal information erased:</p>
              <p>In certain circumstances, you may ask for your personal information to be removed from our systems by emailing or writing to us at the address at the end of this Privacy Policy. Unless there is a reason that the law allows us to use your personal information for longer, we will make reasonable efforts to comply with your request.</p>
            </div>
            
            <div className="border border-gray-300 p-4 my-4 rounded">
              <p className="font-semibold">To request access to your personal information and how we process it:</p>
              <p>You have the right to ask for a copy of the information that we hold about you by emailing or writing to us at the address at the end of this Privacy Policy. We may not provide you with a copy of your personal information if this concerns other individuals or we have another lawful reason to withhold that information.</p>
            </div>
            
            <div className="border border-gray-300 p-4 my-4 rounded">
              <p className="font-semibold">To electronically move, copy or destroy your personal information in a standard, machine-readable form:</p>
              <p>Where we rely on your consent as the lawful basis for processing your personal information or need to process it in connection with a contract in place with you, you may ask us to provide you with a copy of that information in a structured data file. We will provide this to you electronically in a structured, commonly used and machine readable form, such as a CSV file.</p>
              <p>You can ask us to send your personal information directly to another service provider, and we will do so if this is technically possible. We may not provide you with a copy of your personal information if this concerns other individuals or we have another lawful reason to withhold that information.</p>
            </div>
            
            <div className="border border-gray-300 p-4 my-4 rounded">
              <p className="font-semibold">Rights relating to automated decision making, including profiling:</p>
              <p>You may also contest a decision made about you based purely on automated processing by contacting us using the information at the end of this Privacy Policy.</p>
            </div>
            
            <div className="border border-gray-300 p-4 my-4 rounded">
              <p className="font-semibold">To complain to a data protection regulator:</p>
              <p>You have the right to complain to a data protection regulation authority if you are concerned about the way we have processed your personal information. Please visit the specific country&apos;s authority where the goods were purchased.</p>
            </div>
            
            <p>Under French law, you have a right of access, rectification and erasure (under certain circumstances) of your Personal Data and a right to the portability of your Personal Data. You also have the right to restrict the processing under certain circumstances and to object to the processing in the cases when the processing of your Personal Data is based on our legitimate interest. You also have the right to formulate specific and general directives relating to the retention, erasure and communication of your Personal Data after your death.</p>
            
            <p>You can exercise any of those rights at any time by contacting us at the following email address: support@travelmoney.app</p>
            
            <p>Or by writing to us at the following postal address Travel Money; 14 rue Charles V 75004 Paris, France</p>
            
            <p>We will answer to such requests as soon as possible and pursuant to the requirements of Data Protection Laws.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Amendments to our privacy policy</h2>
            <p>We may review this Privacy Policy from time to time and any changes will be notified to you by posting an updated version on our website and/or by contacting you by email. Any changes will take effect 14 days after the date of our email or the date on which we post the modified terms on our website, whichever is earlier. We recommend you regularly check for changes and review this Privacy Policy whenever you visit or use our Services. If you do not agree with any aspect of the updated Privacy Policy you should immediately notify us and cease using our Services.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Questions and claims</h2>
            <p>For any question or claim you may have in relation to the processing of your Personal Data, we invite you to contact us by email at the following address: support@travelmoney.app</p>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
