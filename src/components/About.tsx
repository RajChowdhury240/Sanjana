const principles = [
  {
    title: "Data is dignity.",
    text: "A clean record is the difference between a smooth first day and a frustrated new joiner. Accuracy isn't admin. It's care.",
  },
  {
    title: "Process over heroics.",
    text: "I'd rather build a checklist that scales than put out the same fire twice. Repeatability beats brilliance.",
  },
  {
    title: "People over policy.",
    text: "Policy frames the conversation, but the conversation does the work. Stakeholder trust compounds faster than playbooks.",
  },
];

export function About() {
  return (
    <div className="about">
      <p className="about-lead">
        HR is a craft of attention: to data, to people, and to the small frictions that compound across a
        workforce. <span>My work sits where structured operations meet human judgement.</span>
      </p>
      <div className="about-cols">
        <p>
          I work in Human Capital Operations at PwC AC, where I audit new-hire onboarding records, administer
          the enterprise HRIS and run Risk Control Self-Assessment initiatives. Before that, at PhonePe, I
          coordinated mass hiring drives and kept the people databases that workforce decisions were built on.
        </p>
        <p>
          My path is an unusual one: English literature, then mass communication and public relations at
          St. Xavier&apos;s, then an MBA in HR. The writing makes the communication cleaner, the communication
          makes the people work warmer, and the HR makes it all show up in the data.
        </p>
      </div>
      <ul className="principles">
        {principles.map((p) => (
          <li key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
