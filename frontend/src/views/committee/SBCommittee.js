import FrameComponent1 from "../committee/FrameComponent1";
import ExecutiveCommittee from "../committee/ExecutiveCommittee";
import EditorialTeam from "../committee/EditorialTeam";
import PublicityTeam from "../committee/PublicityTeam";
import MembershipDevTeam from "../committee/MembershipDevTeam";
import FinanceTeam from "../committee/FinanceTeam";
import "./SBCommittee.css";
import LogisticsTeam from "../committee/LogisticsTeam";
import VolunteerManagementTeam from "./VolunteerManagementTeam";
import CommitteeChairpersons from "./CommitteeChairpersons";
import WebDevelopmentTeam from "./WebDevelopmentTeam";



const SBCommittee = () => {
  return (
    <div className="sb-committee">
      <FrameComponent1 />
      <ExecutiveCommittee />
      <section className="frame-section">
        <div className="frame-group">
          <CommitteeChairpersons />
          <EditorialTeam />
          <PublicityTeam />
          <MembershipDevTeam />
          <FinanceTeam />
          <LogisticsTeam />
          <VolunteerManagementTeam />
          <WebDevelopmentTeam />
        </div>
      </section>
    </div>
  );
};

export default SBCommittee;
