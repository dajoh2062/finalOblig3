package oslomet.finaloblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

@Repository
public class kinoRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagrebilett (kinobilett bilett){
        String sql = "INSERT INTO kinobilett(film, fornavn, etternavn, telefonnummer, email, antall) VALUES(?,?,?,?,?,?)";
        db.update(sql, bilett.getFilm(), bilett.getFornavn(), bilett.getEtternavn(), bilett.getTelefonnummer(),
                bilett.getEmail(), bilett.getAntall());
    }

    public List<kinobilett> hentBilett(){
        String sql = "SELECT * FROM kinobilett ORDER BY etternavn";
        List <kinobilett> bilett = db.query(sql,new BeanPropertyRowMapper(kinobilett.class));
        return bilett;
    }

    public void slettAlle(){
        String sql = "DELETE FROM kinobilett";
        db.update(sql);
    }
    public void slettEnBilett(int id){
        String sql="DELETE FROM kinobilett WHERE id=?";
        db.update(sql,id);
    }

    public kinobilett hentEnBilett(int id){
        Object[] param = new Object[1];
        param[0]=id;
        String sql = "Select * FROM kinobilett where id=?";
        kinobilett bilett=db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(kinobilett.class));
        return bilett;

    }

    public void endreEnBilett(kinobilett bilett){
        String sql = "UPDATE kinobilett SET film=?, antall=?, fornavn=?, etternavn=?, telefonnummer=?, email=? where id=+";
        db.update(sql,bilett.getFilm(),bilett.getAntall(),bilett.getFornavn(),bilett.getEtternavn(), bilett.getTelefonnummer(), bilett.getEmail(), bilett.getID());
    }

}

