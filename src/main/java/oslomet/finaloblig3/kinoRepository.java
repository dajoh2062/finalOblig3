package oslomet.finaloblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

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
}

